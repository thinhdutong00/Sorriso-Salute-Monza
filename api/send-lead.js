const RESEND_ENDPOINT = "https://api.resend.com/emails";

const normalizeText = (value) => {
  if (typeof value !== "string") return "";
  return value.trim();
};

const normalizeTextList = (value) => {
  const pending = Array.isArray(value) ? [...value] : [value];
  const normalized = [];

  while (pending.length > 0) {
    const item = pending.shift();

    if (Array.isArray(item)) {
      pending.unshift(...item);
      continue;
    }

    const text = normalizeText(item);
    if (!text) continue;

    if (text.startsWith("[") && text.endsWith("]")) {
      try {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) {
          pending.unshift(...parsed);
          continue;
        }
      } catch {
        // Keep malformed JSON-like input as plain text.
      }
    }

    normalized.push(
      ...text
        .split(",")
        .map((itemValue) => itemValue.trim())
        .filter(Boolean),
    );
  }

  return [...new Set(normalized)].join(", ");
};

const escapeHtml = (value) =>
  normalizeText(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const sanitizeEmailSubjectPart = (value, maxLength = 120) =>
  normalizeText(value)
    .replace(/[\u0000-\u001f\u007f-\u009f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);

const ANAMNESIS_FORM_VARIANTS = new Map([
  ["impianto-singolo-anamnesi", "Impianto singolo"],
  ["denti-fissi-anamnesi", "Denti fissi"],
  ["ponte-su-impianti-anamnesi", "Ponte su impianti"],
  ["protesi-instabile-anamnesi", "Protesi instabile"],
]);

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

const compactRows = (rows) => rows.filter(([, value]) => normalizeText(value));

const buildSections = (lead) => {
  const isImplantologia =
    lead.landingPage.startsWith("/implantologia/") ||
    Boolean(lead.implantologiaProblemType || lead.implantologiaProblemDuration);
  const isAnamnesis = Boolean(lead.formVariant);

  return [
    {
      title: isImplantologia ? "Richiesta implantologia" : "Richiesta",
      rows: compactRows([
        ["Variante modulo", isAnamnesis ? lead.formVariant : ""],
        ["Trattamento richiesto", isAnamnesis ? lead.serviceInterest : ""],
        ["Servizio/interesse", isAnamnesis ? "" : lead.serviceInterest || lead.servizio],
        ["Situazione indicata", lead.implantologiaProblemType],
        ["Dettagli della situazione", lead.implantologiaProblemDetail],
        ["Durata del problema", lead.implantologiaProblemDuration],
        ["Impatto nella giornata", lead.implantologiaDailyImpact],
        ["Obiettivo del trattamento", lead.implantologiaGoal],
        ["Dettagli dell'obiettivo", lead.implantologiaGoalDetail],
        ["Visita già effettuata", lead.implantologiaPreviousVisit],
        ["Radiografia o CBCT recente", lead.implantologiaImagingAvailable],
        ["Fascia d'età", lead.implantologiaAgeRange],
        ["Preferenza data", lead.preferredVisitDate],
        ["Giorni preferiti", lead.preferredVisitDays],
        ["Preferenza orario", lead.preferredVisitTime],
        ["Urgenza", lead.implantologiaUrgency],
        ["Canale di contatto preferito", lead.preferredContactChannel],
      ]),
    },
    {
      title: "Contatti",
      rows: compactRows([
        ["Nome", lead.nome],
        ["Telefono", lead.telefono],
        ["Email", lead.email],
        ["Messaggio", lead.messaggio || "Nessun messaggio inserito"],
      ]),
    },
    {
      title: "Dettagli richiesta",
      rows: compactRows([
        ["Pagina di provenienza", lead.paginaProvenienza],
        ["Pagina form", lead.paginaCorrente],
        ["Problema principale", lead.problema],
        ["Obiettivo desiderato", lead.obiettivo],
        ["Urgenza", lead.urgenza],
        ["Contatto preferito", lead.preferenzaContatto],
        ["Data preferita", lead.dataPreferita],
        ["Orario preferito", lead.orarioPreferito],
      ]),
    },
    {
      title: "Tracking marketing",
      rows: compactRows([
        ["Landing page", lead.landingPage],
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
      ]),
    },
  ].filter(({ rows }) => rows.length > 0);
};

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
    const hasNonEmptyFormVariant =
      body.form_variant !== undefined &&
      body.form_variant !== null &&
      (typeof body.form_variant !== "string" || Boolean(body.form_variant.trim()));
    const formVariant = normalizeText(body.form_variant);
    const anamnesisServiceInterest = ANAMNESIS_FORM_VARIANTS.get(formVariant) || "";

    if (hasNonEmptyFormVariant && !anamnesisServiceInterest) {
      return res.status(400).json({ error: "Variante del modulo non valida" });
    }

    const email = normalizeText(body.email);
    const lead = {
      nome: normalizeText(body.nome || body.nomeCompleto || body.name),
      telefono: normalizeText(body.telefono || body.phone),
      email,
      servizio: normalizeText(body.servizio) || "Valutazione implantologica",
      messaggio: normalizeText(body.messaggio || body.message),
      paginaProvenienza: normalizeText(body.paginaProvenienza || body.page || req.headers?.referer),
      paginaCorrente: normalizeText(body.paginaCorrente),
      problema: normalizeText(body.problema),
      obiettivo: normalizeText(body.obiettivo),
      urgenza: normalizeText(body.urgenza),
      preferenzaContatto: normalizeText(body.preferenzaContatto),
      dataPreferita: normalizeText(body.dataPreferita),
      orarioPreferito: normalizeText(body.orarioPreferito),
      implantologiaProblemType: normalizeText(body.implantologia_problem_type),
      implantologiaProblemDetail: normalizeText(body.implantologia_problem_detail),
      implantologiaProblemDuration: normalizeText(body.implantologia_problem_duration),
      implantologiaDailyImpact: normalizeText(body.implantologia_daily_impact),
      implantologiaGoal: normalizeText(body.implantologia_goal),
      implantologiaGoalDetail: normalizeText(body.implantologia_goal_detail),
      implantologiaPreviousVisit: normalizeText(body.implantologia_previous_visit),
      implantologiaImagingAvailable: normalizeText(body.implantologia_imaging_available),
      implantologiaAgeRange: normalizeText(body.implantologia_age_range),
      preferredVisitDate: normalizeText(body.preferred_visit_date),
      preferredVisitDays: normalizeTextList(body.preferred_visit_days),
      preferredVisitTime: normalizeText(body.preferred_visit_time),
      implantologiaUrgency: normalizeText(body.implantologia_urgency),
      preferredContactChannel: normalizeText(body.preferred_contact_channel),
      privacyConsent: normalizeText(body.privacy_consent),
      formVariant,
      landingPage: normalizeText(body.landing_page),
      serviceInterest: anamnesisServiceInterest || normalizeText(body.service_interest),
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

    if (anamnesisServiceInterest) {
      if (lead.implantologiaProblemType !== "Altro") {
        lead.implantologiaProblemDetail = "";
      }
      if (lead.implantologiaGoal !== "Altro") {
        lead.implantologiaGoalDetail = "";
      }

      const preferredContactChannel = lead.preferredContactChannel.toLocaleLowerCase("it-IT");
      const allowedContactChannels = ["telefono", "whatsapp", "email"];
      const requiresPhone = ["telefono", "whatsapp"].includes(preferredContactChannel);
      const phoneDigits = lead.telefono.replace(/\D/g, "");
      const hasValidPhone = phoneDigits.length >= 6;

      const requiredAnswers = [
        [lead.implantologiaProblemType, "Seleziona la situazione principale"],
        [lead.implantologiaProblemDuration, "Indica da quanto tempo hai questo problema"],
        [lead.implantologiaDailyImpact, "Indica quanto incide il problema nella tua giornata"],
        [lead.implantologiaGoal, "Seleziona il tuo obiettivo principale"],
        [lead.implantologiaPreviousVisit, "Indica se hai già fatto una visita"],
        [lead.implantologiaImagingAvailable, "Indica se hai una radiografia o una CBCT recente"],
        [lead.implantologiaAgeRange, "Seleziona la fascia d'età"],
        [lead.preferredVisitDays, "Seleziona almeno un giorno preferito"],
        [lead.preferredVisitTime, "Seleziona una fascia oraria"],
        [lead.implantologiaUrgency, "Indica se il caso è urgente"],
      ];

      const missingAnswer = requiredAnswers.find(([value]) => !value);
      if (missingAnswer) {
        return res.status(400).json({ error: missingAnswer[1] });
      }

      if (lead.implantologiaProblemType === "Altro" && !lead.implantologiaProblemDetail) {
        return res.status(400).json({ error: "Descrivi brevemente la situazione" });
      }

      if (lead.implantologiaGoal === "Altro" && !lead.implantologiaGoalDetail) {
        return res.status(400).json({ error: "Descrivi brevemente il tuo obiettivo" });
      }

      if (lead.nome.length < 2) {
        return res.status(400).json({ error: "Inserisci un nome valido" });
      }

      if (!allowedContactChannels.includes(preferredContactChannel)) {
        return res.status(400).json({ error: "Seleziona un canale di contatto valido" });
      }

      if (lead.email && !isEmail(lead.email)) {
        return res.status(400).json({ error: "Inserisci un indirizzo email valido" });
      }

      if (lead.telefono && !hasValidPhone) {
        return res.status(400).json({ error: "Inserisci un numero di telefono valido" });
      }

      if (requiresPhone && !hasValidPhone) {
        return res.status(400).json({
          error: "Inserisci un numero di telefono valido per il canale di contatto selezionato",
        });
      }

      if (preferredContactChannel === "email" && !isEmail(lead.email)) {
        return res.status(400).json({
          error: "Inserisci un indirizzo email valido per il canale di contatto selezionato",
        });
      }

      if (lead.privacyConsent !== "true") {
        return res.status(400).json({ error: "Il consenso privacy è obbligatorio" });
      }
    } else if (!lead.nome || !lead.telefono) {
      return res.status(400).json({ error: "Nome e telefono sono obbligatori" });
    }

    const sections = buildSections(lead);
    const text = [
      "Nuova richiesta dal form Sorriso & Salute Monza",
      "",
      ...sections.flatMap((section) => [
        section.title,
        ...section.rows.map(([label, value]) => `${label}: ${value}`),
        "",
      ]),
    ].join("\n");
    const html = `
      <h2>Nuova richiesta dal form Sorriso &amp; Salute Monza</h2>
      ${sections
        .map(
          (section) => `
            <h3 style="margin: 24px 0 8px; font-family: Arial, sans-serif; color: #0e384c;">${escapeHtml(section.title)}</h3>
            <table cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 15px;">
              <tbody>
                ${section.rows
                  .map(
                    ([label, value]) => `
                      <tr>
                        <th align="left" style="width: 34%; border: 1px solid #d8e3e8; background: #f3f8fb;">${escapeHtml(label)}</th>
                        <td style="border: 1px solid #d8e3e8;">${escapeHtml(value).replaceAll("\n", "<br>")}</td>
                      </tr>
                    `,
                  )
                  .join("")}
              </tbody>
            </table>
          `,
        )
        .join("")}
    `;

    const payload = {
      from,
      to,
      subject: `Nuova richiesta - ${sanitizeEmailSubjectPart(lead.servizio, 80) || "valutazione"} - ${sanitizeEmailSubjectPart(lead.nome) || "Richiesta"}`.slice(
        0,
        240,
      ),
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
