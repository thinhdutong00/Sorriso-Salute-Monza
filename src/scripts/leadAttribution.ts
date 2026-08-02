export const LEAD_ATTRIBUTION_STORAGE_KEY = "lead_attribution_v1";
export const LEAD_ATTRIBUTION_VERSION = 1 as const;
/** Durata massima dello snapshot di attribuzione: quattro ore. */
export const LEAD_ATTRIBUTION_TTL_MS = 4 * 60 * 60 * 1000;

export const LEAD_UTM_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_adgroup",
  "utm_term",
  "utm_content",
  "utm_matchtype",
  "utm_device",
  "utm_network",
] as const;

export const LEAD_CLICK_ID_PARAMETERS = ["gclid", "gbraid", "wbraid"] as const;

export const LEAD_ATTRIBUTION_PARAMETERS = [
  ...LEAD_UTM_PARAMETERS,
  ...LEAD_CLICK_ID_PARAMETERS,
] as const;

export type LeadAttributionParameter =
  (typeof LEAD_ATTRIBUTION_PARAMETERS)[number];

export type LeadAttributionSnapshot = {
  version: typeof LEAD_ATTRIBUTION_VERSION;
  captured_at: string;
  expires_at: string;
  landing_page: string;
  page_title: string;
  initial_referrer: string;
} & Record<LeadAttributionParameter, string>;

export type ResolvedLeadAttribution = Pick<
  LeadAttributionSnapshot,
  "landing_page" | "page_title" | "initial_referrer"
> &
  Record<LeadAttributionParameter, string>;

export type CaptureLeadAttributionOptions = {
  url?: URL | string;
  pageTitle?: string;
  initialReferrer?: string;
  now?: number;
};

export type ResolveLeadAttributionOptions = {
  currentUrl?: URL | string;
  pageTitle?: string;
  documentReferrer?: string;
  now?: number;
};

const EXCLUDED_CAPTURE_PATHS = new Set(["/thank-you-page"]);
const SNAPSHOT_STRING_FIELDS = [
  "captured_at",
  "expires_at",
  "landing_page",
  "page_title",
  "initial_referrer",
] as const;

const getSessionStorage = (): Storage | undefined => {
  try {
    return typeof window === "undefined" ? undefined : window.sessionStorage;
  } catch {
    return undefined;
  }
};

const parseUrl = (value: URL | string | undefined): URL | undefined => {
  if (value instanceof URL) return value;

  const fallbackUrl =
    typeof window === "undefined" ? undefined : window.location.href;
  const candidate = value || fallbackUrl;
  if (!candidate) return undefined;

  try {
    return new URL(candidate, fallbackUrl);
  } catch {
    return undefined;
  }
};

const parseSameOriginUrl = (
  value: string,
  origin: string,
): URL | undefined => {
  if (!value) return undefined;

  try {
    const url = new URL(value, origin);
    return url.origin === origin ? url : undefined;
  } catch {
    return undefined;
  }
};

const normalizePathname = (pathname: string): string =>
  pathname.replace(/\/+$/, "") || "/";

const campaignValuesFromUrl = (
  url: URL,
): Record<LeadAttributionParameter, string> =>
  Object.fromEntries(
    LEAD_ATTRIBUTION_PARAMETERS.map((field) => [
      field,
      url.searchParams.get(field) || "",
    ]),
  ) as Record<LeadAttributionParameter, string>;

const hasCampaignData = (url: URL | undefined): url is URL =>
  Boolean(
    url &&
      LEAD_ATTRIBUTION_PARAMETERS.some(
        (field) => (url.searchParams.get(field) || "").trim().length > 0,
      ),
  );

const campaignMatchesSnapshot = (
  url: URL,
  snapshot: LeadAttributionSnapshot,
): boolean =>
  hasCampaignData(url) &&
  LEAD_ATTRIBUTION_PARAMETERS.every(
    (field) => snapshot[field] === (url.searchParams.get(field) || ""),
  );

const createSnapshot = ({
  url,
  pageTitle,
  initialReferrer,
  now,
}: Required<
  Pick<CaptureLeadAttributionOptions, "url" | "pageTitle" | "initialReferrer" | "now">
>): LeadAttributionSnapshot => {
  const resolvedUrl = url instanceof URL ? url : new URL(url);

  return {
    version: LEAD_ATTRIBUTION_VERSION,
    captured_at: new Date(now).toISOString(),
    expires_at: new Date(now + LEAD_ATTRIBUTION_TTL_MS).toISOString(),
    landing_page: resolvedUrl.pathname,
    page_title: pageTitle,
    initial_referrer: initialReferrer,
    ...campaignValuesFromUrl(resolvedUrl),
  };
};

const toResolvedAttribution = (
  snapshot: LeadAttributionSnapshot,
): ResolvedLeadAttribution => {
  const resolved = {
    landing_page: snapshot.landing_page,
    page_title: snapshot.page_title,
    initial_referrer: snapshot.initial_referrer,
  } as ResolvedLeadAttribution;

  LEAD_ATTRIBUTION_PARAMETERS.forEach((field) => {
    resolved[field] = snapshot[field];
  });

  return resolved;
};

export const isLeadAttributionSnapshot = (
  value: unknown,
): value is LeadAttributionSnapshot => {
  if (!value || typeof value !== "object") return false;

  const candidate = value as Record<string, unknown>;
  if (candidate.version !== LEAD_ATTRIBUTION_VERSION) return false;
  if (
    !SNAPSHOT_STRING_FIELDS.every(
      (field) => typeof candidate[field] === "string",
    )
  ) {
    return false;
  }
  if (
    !LEAD_ATTRIBUTION_PARAMETERS.every(
      (field) => typeof candidate[field] === "string",
    )
  ) {
    return false;
  }

  const capturedAt = Date.parse(candidate.captured_at as string);
  const expiresAt = Date.parse(candidate.expires_at as string);
  return (
    Number.isFinite(capturedAt) &&
    Number.isFinite(expiresAt) &&
    expiresAt > capturedAt
  );
};

export const isLeadAttributionExpired = (
  snapshot: LeadAttributionSnapshot,
  now = Date.now(),
): boolean => Date.parse(snapshot.expires_at) <= now;

export const clearLeadAttribution = (): boolean => {
  const storage = getSessionStorage();
  if (!storage) return false;

  try {
    storage.removeItem(LEAD_ATTRIBUTION_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
};

export const readLeadAttribution = (
  now = Date.now(),
): LeadAttributionSnapshot | null => {
  const storage = getSessionStorage();
  if (!storage) return null;

  try {
    const rawValue = storage.getItem(LEAD_ATTRIBUTION_STORAGE_KEY);
    if (!rawValue) return null;

    const parsedValue: unknown = JSON.parse(rawValue);
    if (
      !isLeadAttributionSnapshot(parsedValue) ||
      isLeadAttributionExpired(parsedValue, now)
    ) {
      storage.removeItem(LEAD_ATTRIBUTION_STORAGE_KEY);
      return null;
    }

    return parsedValue;
  } catch {
    try {
      storage.removeItem(LEAD_ATTRIBUTION_STORAGE_KEY);
    } catch {
      // Lo storage non disponibile non deve interrompere il form.
    }
    return null;
  }
};

export const updateLeadAttribution = (
  snapshot: LeadAttributionSnapshot,
  now = Date.now(),
): boolean => {
  if (
    !isLeadAttributionSnapshot(snapshot) ||
    isLeadAttributionExpired(snapshot, now)
  ) {
    return false;
  }

  const storage = getSessionStorage();
  if (!storage) return false;

  try {
    storage.setItem(LEAD_ATTRIBUTION_STORAGE_KEY, JSON.stringify(snapshot));
    return true;
  } catch {
    return false;
  }
};

export const captureLeadAttribution = (
  options: CaptureLeadAttributionOptions = {},
): LeadAttributionSnapshot | null => {
  const url = parseUrl(options.url);
  const now = options.now ?? Date.now();
  if (!url) return readLeadAttribution(now);
  if (EXCLUDED_CAPTURE_PATHS.has(normalizePathname(url.pathname))) {
    return readLeadAttribution(now);
  }

  const storedAttribution = readLeadAttribution(now);
  if (
    storedAttribution &&
    (!hasCampaignData(url) || campaignMatchesSnapshot(url, storedAttribution))
  ) {
    return storedAttribution;
  }

  const snapshot = createSnapshot({
    url,
    pageTitle:
      options.pageTitle ??
      (typeof document === "undefined" ? "" : document.title),
    initialReferrer:
      options.initialReferrer ??
      (typeof document === "undefined" ? "" : document.referrer),
    now,
  });
  updateLeadAttribution(snapshot, now);
  return snapshot;
};

export const resolveLeadAttribution = (
  options: ResolveLeadAttributionOptions = {},
): ResolvedLeadAttribution => {
  const now = options.now ?? Date.now();
  const currentUrl = parseUrl(options.currentUrl);
  if (!currentUrl) {
    const emptyUrl = new URL("http://localhost/");
    return toResolvedAttribution(
      createSnapshot({
        url: emptyUrl,
        pageTitle: options.pageTitle || "",
        initialReferrer: options.documentReferrer || "",
        now,
      }),
    );
  }

  const documentReferrer =
    options.documentReferrer ??
    (typeof document === "undefined" ? "" : document.referrer);
  const pageTitle =
    options.pageTitle ??
    (typeof document === "undefined" ? "" : document.title);
  const referrerUrl = parseSameOriginUrl(
    documentReferrer,
    currentUrl.origin,
  );
  const storedAttribution = readLeadAttribution(now);
  const campaignUrl = hasCampaignData(currentUrl)
    ? currentUrl
    : hasCampaignData(referrerUrl)
      ? referrerUrl
      : undefined;

  if (
    storedAttribution &&
    (!campaignUrl || campaignMatchesSnapshot(campaignUrl, storedAttribution))
  ) {
    return toResolvedAttribution(storedAttribution);
  }

  const landingUrl = campaignUrl || referrerUrl || currentUrl;
  const landingIsCurrentPage = landingUrl.href === currentUrl.href;
  const snapshot = createSnapshot({
    url: landingUrl,
    pageTitle: landingIsCurrentPage ? pageTitle : "",
    initialReferrer: landingIsCurrentPage ? documentReferrer : "",
    now,
  });
  updateLeadAttribution(snapshot, now);
  return toResolvedAttribution(snapshot);
};
