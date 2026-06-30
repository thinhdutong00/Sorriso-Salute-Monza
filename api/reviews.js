import crypto from "node:crypto";
import { neon } from "@neondatabase/serverless";

const MAX_TITLE_LENGTH = 120;
const MAX_CONTENT_LENGTH = 2000;
const MAX_AUTHOR_LENGTH = 80;
const MAX_EMAIL_LENGTH = 254;
const MAX_USER_AGENT_LENGTH = 300;
const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_MAX_REVIEWS = 3;

const normalizeText = (value) => {
  if (typeof value !== "string") return "";
  return value.trim();
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const readRequestBody = async (req) => {
  if (Buffer.isBuffer(req.body)) {
    const rawBody = req.body.toString("utf8");
    try {
      return JSON.parse(rawBody);
    } catch {
      return Object.fromEntries(new URLSearchParams(rawBody));
    }
  }
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks).toString("utf8");
  if (!rawBody) return {};

  try {
    return JSON.parse(rawBody);
  } catch {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }
};

const getSql = () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;
  return neon(databaseUrl);
};

const getIpAddress = (req) => {
  const forwardedFor = normalizeText(req.headers?.["x-forwarded-for"]);
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return normalizeText(req.headers?.["x-real-ip"]) || normalizeText(req.socket?.remoteAddress);
};

const hashIpAddress = (ipAddress) => {
  const secret = process.env.REVIEWS_IP_HASH_SECRET || process.env.RESEND_API_KEY || "sorriso-salute-reviews";
  return crypto.createHmac("sha256", secret).update(ipAddress || "unknown").digest("hex");
};

const toPublicReview = (row) => ({
  id: `user-${row.id}`,
  rating: Number(row.rating),
  title: row.title,
  content: row.content,
  author: row.author,
  createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : row.created_at,
  source: row.source,
});

const parseConsent = (value) => value === true || value === "true" || value === "1" || value === 1;

const validateReview = (body) => {
  const review = {
    rating: Number(body.rating),
    title: normalizeText(body.title),
    content: normalizeText(body.content),
    author: normalizeText(body.author || body.name),
    email: normalizeText(body.email).toLowerCase(),
    consent: parseConsent(body.consent || body.terms),
    website: normalizeText(body.website),
  };

  if (review.website) {
    return { error: "Richiesta non valida" };
  }

  if (!Number.isInteger(review.rating) || review.rating < 1 || review.rating > 5) {
    return { error: "Seleziona una valutazione da 1 a 5 stelle" };
  }

  if (review.title.length < 3 || review.title.length > MAX_TITLE_LENGTH) {
    return { error: "Inserisci un titolo valido" };
  }

  if (review.content.length < 10 || review.content.length > MAX_CONTENT_LENGTH) {
    return { error: "Inserisci un testo recensione valido" };
  }

  if (review.author.length < 2 || review.author.length > MAX_AUTHOR_LENGTH) {
    return { error: "Inserisci un nome valido" };
  }

  if (!isEmail(review.email) || review.email.length > MAX_EMAIL_LENGTH) {
    return { error: "Inserisci un indirizzo email valido" };
  }

  if (!review.consent) {
    return { error: "Conferma che la recensione è basata sulla tua esperienza" };
  }

  return { review };
};

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  try {
    if (req.method === "GET") {
      const sql = getSql();
      if (!sql) return res.status(200).json({ reviews: [] });

      const rows = await sql`
        SELECT id, title, content, rating, author, created_at, source
        FROM reviews
        ORDER BY created_at DESC
        LIMIT 100
      `;

      return res.status(200).json({ reviews: rows.map(toPublicReview) });
    }

    const body = await readRequestBody(req);
    const { review, error } = validateReview(body);
    if (error) return res.status(400).json({ error });

    const sql = getSql();
    if (!sql) return res.status(503).json({ error: "Archivio recensioni non configurato" });

    const ipHash = hashIpAddress(getIpAddress(req));
    const [rateLimit] = await sql`
      SELECT COUNT(*)::int AS count
      FROM reviews
      WHERE ip_hash = ${ipHash}
        AND created_at > NOW() - INTERVAL '10 minutes'
    `;

    if (Number(rateLimit?.count || 0) >= RATE_LIMIT_MAX_REVIEWS) {
      return res.status(429).json({
        error: `Hai inviato troppe recensioni negli ultimi ${RATE_LIMIT_WINDOW_MINUTES} minuti. Riprova più tardi.`,
      });
    }

    const userAgent = normalizeText(req.headers?.["user-agent"]).slice(0, MAX_USER_AGENT_LENGTH);
    const [row] = await sql`
      INSERT INTO reviews (title, content, rating, author, email, ip_hash, user_agent, source)
      VALUES (
        ${review.title},
        ${review.content},
        ${review.rating},
        ${review.author},
        ${review.email},
        ${ipHash},
        ${userAgent},
        'site'
      )
      RETURNING id, title, content, rating, author, created_at, source
    `;

    return res.status(200).json({ ok: true, review: toPublicReview(row) });
  } catch (error) {
    console.error("Reviews API failed", error);
    return res.status(500).json({ error: "Operazione recensioni non riuscita" });
  }
}
