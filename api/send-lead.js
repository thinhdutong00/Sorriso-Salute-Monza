const RESEND_ENDPOINT = "https://api.resend.com/emails";

const normalizeText = (value) => {
  if (typeof value !== "string") return "";
  return value.trim();
};

const escapeHtml = (value) =>
  normalizeText(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const recipientsFromEnv = (value) =>
  normalizeText(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

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

const buildRows = (lead) =>
  [
    ["Nome", lead.nome],
    ["Telefono", lead.telefono],
    ["Email", lead.email],
    ["Servizio", lead.servizio],
    ["Messaggio", lead.messaggio || "Nessun messaggio inserito"],
    ["Pagina di provenienza", lead.paginaProvenienza],
    ["Pagina form", lead.paginaCorrente],
    ["Problema principale", lead.problema],
    ["Obiettivo desiderato", lead.obiettivo],
    ["Urgenza", lead.urgenza],
    ["Contatto preferito", lead.preferenzaContatto],
    ["Data preferita", lead.dataPreferita],
    ["Orario preferito", lead.orarioPreferito],
    ["Landing page", lead.landingPage],
    ["Interesse servizio", lead.serviceInterest],
    ["Titolo pagina", lead.pageTitle],
    ["UTM source", lead.utmSource],
    ["UTM medium", lead.utmMedium],
    ["UTM campaign", lead.utmCampaign],
    ["UTM ID", lead.utmId],
    ["UTM ad group", lead.utmAdgroup],
    ["UTM term", lead.utmTerm],
    ["UTM content", lead.utmContent],
    ["Match type", lead.utmMatchtype],
    ["Device", lead.utmDevice],
    ["Network", lead.utmNetwork],
    ["GCLID", lead.gclid],
    ["GBRAID", lead.gbraid],
    ["WBRAID", lead.wbraid],
  ].filter(([, value]) => normalizeText(value));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = recipientsFromEnv(process.env.CONTACT_TO);

  if (!apiKey || !from || to.length === 0) {
    return res.status(500).json({ error: "Configurazione email mancante" });
  }

  try {
    const body = await readRequestBody(req);
    const email = normalizeText(body.email);
    const lead = {
      nome: normalizeText(body.nome || body.nomeCompleto),
      telefono: normalizeText(body.telefono),
      email,
      servizio: normalizeText(body.servizio) || "Valutazione implantologica",
      messaggio: normalizeText(body.messaggio),
      paginaProvenienza: normalizeText(body.paginaProvenienza || body.page || req.headers?.referer),
      paginaCorrente: normalizeText(body.paginaCorrente),
      problema: normalizeText(body.problema),
      obiettivo: normalizeText(body.obiettivo),
      urgenza: normalizeText(body.urgenza),
      preferenzaContatto: normalizeText(body.preferenzaContatto),
      dataPreferita: normalizeText(body.dataPreferita),
      orarioPreferito: normalizeText(body.orarioPreferito),
      landingPage: normalizeText(body.landing_page),
      serviceInterest: normalizeText(body.service_interest),
      pageTitle: normalizeText(body.page_title),
      utmSource: normalizeText(body.utm_source),
      utmMedium: normalizeText(body.utm_medium),
      utmCampaign: normalizeText(body.utm_campaign),
      utmId: normalizeText(body.utm_id),
      utmAdgroup: normalizeText(body.utm_adgroup),
      utmTerm: normalizeText(body.utm_term),
      utmContent: normalizeText(body.utm_content),
      utmMatchtype: normalizeText(body.utm_matchtype),
      utmDevice: normalizeText(body.utm_device),
      utmNetwork: normalizeText(body.utm_network),
      gclid: normalizeText(body.gclid),
      gbraid: normalizeText(body.gbraid),
      wbraid: normalizeText(body.wbraid),
    };

    if (!lead.nome || !lead.telefono) {
      return res.status(400).json({ error: "Nome e telefono sono obbligatori" });
    }

    const rows = buildRows(lead);
    const text = [
      "Nuova richiesta dal form Sorriso & Salute Monza",
      "",
      ...rows.map(([label, value]) => `${label}: ${value}`),
    ].join("\n");
    const html = `
      <h2>Nuova richiesta dal form Sorriso &amp; Salute Monza</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 15px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th align="left" style="border: 1px solid #d8e3e8; background: #f3f8fb;">${escapeHtml(label)}</th>
                  <td style="border: 1px solid #d8e3e8;">${escapeHtml(value).replaceAll("\n", "<br>")}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    `;

    const payload = {
      from,
      to,
      subject: `Nuova richiesta ${lead.servizio ? `- ${lead.servizio}` : "valutazione"} - ${lead.nome}`,
      html,
      text,
    };

    if (isEmail(email)) {
      payload.reply_to = email;
    }

    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const resendResult = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      console.error("Resend send failed", resendResponse.status, resendResult);
      return res.status(502).json({ error: "Invio email non riuscito" });
    }

    return res.status(200).json({ ok: true, id: resendResult.id });
  } catch (error) {
    console.error("Lead send failed", error);
    return res.status(500).json({ error: "Invio richiesta non riuscito" });
  }
}
