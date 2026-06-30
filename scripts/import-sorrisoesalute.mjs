import { createHash } from "node:crypto";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_ORIGIN = "https://www.sorrisoesalute.it";
const SOURCE_HOSTS = new Set(["www.sorrisoesalute.it", "sorrisoesalute.it"]);
const TARGET_ORIGIN = "https://sorrisoesalutemonza.it";
const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "src", "data", "mirror");
const PAGE_DIR = path.join(DATA_DIR, "pages");
const ASSET_DIR = path.join(ROOT, "public", "mirror-assets");
const MISSING_ASSET_URL = "/mirror-assets/missing.svg";
const MISSING_ASSET_FILE = path.join(ASSET_DIR, "missing.svg");
const USER_AGENT = "Mozilla/5.0 (compatible; SorrisoSaluteMonzaStaticImport/1.0)";
const MAX_PAGES = 260;

const RESERVED_REDIRECTS = new Map([
  ["/attivita/implantologia/", "/implantologia/"],
  ["/prenota-una-visita/", "/richiesta-generale/"],
]);

const REMOVED_NEWS_PREFIXES = ["/news/", "/category/news/"];
const REMOVED_BLOG_ARCHIVE_PREFIXES = ["/author/", "/tag/", "/category/"];

const PRESERVED_LOCAL_PATHS = new Set([
  "/implantologia/",
  "/richiesta/",
  "/richiesta-generale/",
  "/thank-you-page/",
  "/preferenze-prenotazione/",
]);

const TECHNICAL_PREFIXES = [
  "/elementskit-content/",
  "/wp-admin/",
  "/wp-content/",
  "/wp-includes/",
  "/wp-json/",
];

const TECHNICAL_EXACT_PATHS = new Set([
  "/xmlrpc.php/",
  "/wp-login.php/",
]);

const ASSET_EXTENSIONS = new Set([
  ".avif",
  ".css",
  ".eot",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".json",
  ".map",
  ".mp4",
  ".pdf",
  ".png",
  ".svg",
  ".ttf",
  ".webm",
  ".webp",
  ".woff",
  ".woff2",
]);

const PAGE_SKIP_EXTENSIONS = new Set([
  ".avif",
  ".css",
  ".eot",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".json",
  ".map",
  ".mp4",
  ".pdf",
  ".png",
  ".svg",
  ".ttf",
  ".webm",
  ".webp",
  ".woff",
  ".woff2",
  ".xml",
]);

const CONTENT_TYPE_EXTENSIONS = new Map([
  ["text/css", ".css"],
  ["application/javascript", ".js"],
  ["text/javascript", ".js"],
  ["image/avif", ".avif"],
  ["image/gif", ".gif"],
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/svg+xml", ".svg"],
  ["image/webp", ".webp"],
  ["font/ttf", ".ttf"],
  ["font/woff", ".woff"],
  ["font/woff2", ".woff2"],
  ["application/font-woff", ".woff"],
  ["application/font-woff2", ".woff2"],
  ["application/pdf", ".pdf"],
]);

const assetMap = new Map();
const discovered = new Set();
const discoveredPaths = new Set();
const queued = [];
const importedPages = [];
const importedPaths = new Set();
const failedAssets = [];

await main();

async function main() {
  await rm(DATA_DIR, { recursive: true, force: true });
  await rm(ASSET_DIR, { recursive: true, force: true });
  await mkdir(PAGE_DIR, { recursive: true });
  await mkdir(ASSET_DIR, { recursive: true });
  await writeMissingAsset();

  const sitemapUrls = await collectSitemapUrls(`${SOURCE_ORIGIN}/sitemap.xml`);
  enqueue(`${SOURCE_ORIGIN}/`);
  for (const url of sitemapUrls) enqueue(url);

  for (let index = 0; index < queued.length && importedPages.length < MAX_PAGES; index += 1) {
    const sourceUrl = queued[index];
    const pagePath = pathFromUrl(sourceUrl);
    if (!shouldImportPagePath(pagePath)) continue;
    if (importedPaths.has(pagePath)) continue;

    try {
      const response = await fetchWithTimeout(sourceUrl);
      const contentType = response.headers.get("content-type") || "";
      if (!response.ok || !contentType.includes("text/html")) {
        console.warn(`skip non-html ${response.status} ${sourceUrl}`);
        continue;
      }

      const html = await response.text();
      for (const href of extractInternalLinks(html, response.url || sourceUrl)) enqueue(href);

      const processed = await processPageHtml(html, sourceUrl, pagePath);
      if (shouldSkipProcessedPage(processed, pagePath)) {
        console.log(`skip blog/news ${pagePath}`);
        continue;
      }

      const fileBase = fileBaseForPath(pagePath);
      const headFile = `${fileBase}.head.html`;
      const bodyFile = `${fileBase}.body.html`;
      await writeFile(path.join(PAGE_DIR, headFile), processed.head);
      await writeFile(path.join(PAGE_DIR, bodyFile), processed.body);

      importedPages.push({
        path: pagePath,
        sourceUrl,
        finalSourceUrl: response.url || sourceUrl,
        title: processed.title,
        lang: processed.lang,
        bodyClass: processed.bodyClass,
        bodyId: processed.bodyId,
        headFile,
        bodyFile,
      });
      importedPaths.add(pagePath);

      console.log(`imported ${pagePath}`);
    } catch (error) {
      console.warn(`failed ${sourceUrl}: ${error.message}`);
    }
  }

  importedPages.sort((a, b) => a.path.localeCompare(b.path));
  await writeFile(
    path.join(DATA_DIR, "manifest.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        source: SOURCE_ORIGIN,
        target: TARGET_ORIGIN,
        reservedRedirects: Object.fromEntries(RESERVED_REDIRECTS),
        pages: importedPages,
        failedAssets,
      },
      null,
      2,
    ),
  );

  console.log(`Imported pages: ${importedPages.length}`);
  console.log(`Mirrored assets: ${assetMap.size}`);
  if (failedAssets.length > 0) {
    console.warn(`Failed assets: ${failedAssets.length}`);
  }
}

async function collectSitemapUrls(indexUrl) {
  const indexXml = await fetchText(indexUrl);
  const sitemapUrls = extractLocs(indexXml).filter((url) => {
    try {
      const pathname = new URL(url).pathname;
      return !pathname.includes("elementskit_content") && !pathname.includes("elementskit_template");
    } catch {
      return false;
    }
  });

  const urls = [];
  for (const sitemapUrl of sitemapUrls) {
    const xml = await fetchText(sitemapUrl);
    urls.push(...extractLocs(xml));
  }
  return [...new Set(urls)];
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((match) => decodeHtmlEntities(match[1].trim()));
}

function enqueue(url) {
  const normalizedUrl = normalizeQueueUrl(url);
  if (!normalizedUrl) return;
  const pagePath = pathFromUrl(normalizedUrl);
  if (!shouldImportPagePath(pagePath)) return;
  if (discoveredPaths.has(pagePath)) return;
  if (discovered.has(normalizedUrl)) return;
  discovered.add(normalizedUrl);
  discoveredPaths.add(pagePath);
  queued.push(normalizedUrl);
}

function normalizeQueueUrl(value) {
  try {
    if (!value || value.startsWith("#")) return null;
    const url = new URL(value, SOURCE_ORIGIN);
    if (!SOURCE_HOSTS.has(url.hostname)) return null;
    url.hash = "";
    url.search = "";
    if (isLikelyAssetPath(url.pathname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function pathFromUrl(value) {
  const url = new URL(value, SOURCE_ORIGIN);
  return normalizePagePath(url.pathname);
}

function normalizePagePath(pathname) {
  let pagePath = pathname || "/";
  pagePath = pagePath.replace(/\/index\.html?$/i, "/");
  if (!pagePath.startsWith("/")) pagePath = `/${pagePath}`;
  if (!pagePath.endsWith("/")) pagePath = `${pagePath}/`;
  return pagePath;
}

function shouldImportPagePath(pagePath) {
  if (PRESERVED_LOCAL_PATHS.has(pagePath)) return false;
  if (RESERVED_REDIRECTS.has(pagePath)) return false;
  if (isRemovedNewsPath(pagePath)) return false;
  if (REMOVED_BLOG_ARCHIVE_PREFIXES.some((prefix) => pagePath.startsWith(prefix))) return false;
  if (pagePath !== "/cookie-policy/" && pagePath.endsWith("/cookie-policy/")) return false;
  if (pagePath !== "/privacy-policy/" && pagePath.endsWith("/privacy-policy/")) return false;
  if (TECHNICAL_EXACT_PATHS.has(pagePath)) return false;
  if (TECHNICAL_PREFIXES.some((prefix) => pagePath.startsWith(prefix))) return false;
  if (pagePath.includes("/feed/") || pagePath.endsWith("/feed/")) return false;
  return !isLikelyAssetPath(pagePath);
}

function isLikelyAssetPath(pathname) {
  const ext = path.extname(pathname.split("?")[0]).toLowerCase();
  return PAGE_SKIP_EXTENSIONS.has(ext);
}

function extractInternalLinks(html, baseUrl) {
  const links = [];
  for (const match of html.matchAll(/\bhref\s*=\s*(["'])(.*?)\1/gi)) {
    const href = decodeHtmlEntities(match[2].trim());
    if (!href || href.startsWith("#")) continue;
    if (/^(mailto|tel|sms|javascript|data):/i.test(href)) continue;
    try {
      const url = new URL(href, baseUrl);
      if (SOURCE_HOSTS.has(url.hostname)) links.push(url.toString());
    } catch {
      // Ignore malformed links in the source page.
    }
  }
  return links;
}

async function processPageHtml(html, sourceUrl, pagePath) {
  const htmlAttrs = html.match(/<html\b([^>]*)>/i)?.[1] || "";
  const lang = attributeValue(htmlAttrs, "lang") || "it-IT";
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] || "";
  const bodyMatch = html.match(/<body\b([^>]*)>([\s\S]*?)<\/body>/i);
  const bodyAttrs = bodyMatch?.[1] || "";
  const bodyClass = sanitizeBodyClass(attributeValue(bodyAttrs, "class") || "");
  const bodyId = attributeValue(bodyAttrs, "id") || "";
  const title = decodeHtmlEntities(head.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "");

  let cleanedHead = removeSourceTracking(head);
  let cleanedBody = removeSourceTracking(bodyMatch?.[2] || "");
  cleanedHead = removeSourceCookieBanner(cleanedHead);
  cleanedBody = removeSourceCookieBanner(cleanedBody);
  cleanedHead = removeSourceFormRuntime(cleanedHead);
  cleanedBody = removeSourceFormRuntime(cleanedBody);
  cleanedHead = removeWordPressApiHints(cleanedHead);
  cleanedBody = removeSourcePreloader(cleanedBody);
  cleanedBody = removeSourceMagicCursor(cleanedBody);
  cleanedBody = replaceContactForms(cleanedBody);

  cleanedHead = await rewriteHtmlFragment(cleanedHead, sourceUrl, pagePath);
  cleanedBody = await rewriteHtmlFragment(cleanedBody, sourceUrl, pagePath);

  cleanedHead = appendMirrorOverrides(cleanedHead);
  return {
    head: cleanedHead.trim(),
    body: cleanedBody.trim(),
    title,
    lang,
    bodyClass,
    bodyId,
  };
}

function attributeValue(attrs, name) {
  const match = attrs.match(new RegExp(`\\b${name}\\s*=\\s*([\"'])(.*?)\\1`, "i"));
  return match?.[2] || "";
}

function sanitizeBodyClass(value) {
  return value
    .split(/\s+/)
    .filter((className) => className && className !== "tt-magic-cursor")
    .join(" ");
}

function removeSourceTracking(fragment) {
  return fragment
    .replace(/<!--\s*Google Tag Manager[\s\S]*?<!--\s*End Google Tag Manager\s*-->/gi, "")
    .replace(/<noscript\b[^>]*>[\s\S]*?googletagmanager[\s\S]*?<\/noscript>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (tag) => {
      const lower = tag.toLowerCase();
      if (
        lower.includes("googletagmanager.com") ||
        lower.includes("google-analytics.com") ||
        lower.includes("googleadservices.com") ||
        lower.includes("gtag(") ||
        lower.includes("datalayer") ||
        lower.includes("gtm-")
      ) {
        return "";
      }
      return tag;
    });
}

function removeWordPressApiHints(fragment) {
  return fragment
    .replace(/<link\b[^>]*(?:wp-json|xmlrpc\.php|wlwmanifest|\/feed\/|comments\/feed|oembed)[^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=(["'])alternate\1[^>]*type=(["'])application\/rss\+xml\2[^>]*>/gi, "");
}

function removeSourceCookieBanner(fragment) {
  let output = fragment
    .replace(/<link\b[^>]*cookie-law-info[^>]*>/gi, "")
    .replace(/<script\b[^>]*cookie-law-info[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (tag) =>
      /(?:_ckyConfig|_ckyStyles|CookieLawInfo|cookie-law-info)/i.test(tag) ? "" : tag,
    )
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, (tag) =>
      /(?:\.cky-|cookie-law-info)/i.test(tag) ? "" : tag,
    );
  return output;
}

function removeSourceFormRuntime(fragment) {
  return fragment
    .replace(/<link\b[^>]*(?:contact-form-7|wpcf7)[^>]*>/gi, "")
    .replace(/<script\b[^>]*(?:contact-form-7|wpcf7)[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (tag) =>
      /(?:var\s+wpcf7|wpcf7|contact-form-7)/i.test(tag) ? "" : tag,
    );
}

function removeSourcePreloader(fragment) {
  return fragment.replace(
    /^\s*<div\b[^>]*class=(["'])preloader\1[^>]*>\s*<div\b[^>]*class=(["'])loading-container\2[^>]*>\s*<div\b[^>]*class=(["'])loading\3[^>]*>\s*<\/div>\s*<div\b[^>]*id=(["'])loading-icon\4[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*/i,
    "",
  );
}

function removeSourceMagicCursor(fragment) {
  return fragment
    .replace(/^\s*<div\b[^>]*id=(["'])magic-cursor\1[^>]*>\s*<div\b[^>]*id=(["'])ball\2[^>]*>\s*<\/div>\s*<\/div>\s*/i, "")
    .replace(/<script\b[^>]*id=(["'])magiccursor-js\1[^>]*>\s*<\/script>\s*/gi, "");
}

function replaceContactForms(fragment) {
  return fragment.replace(/<form\b[\s\S]*?<\/form>/gi, (form) => {
    const lower = form.toLowerCase();
    if (
      lower.includes("wpcf7") ||
      lower.includes("contact-form") ||
      lower.includes("prenota") ||
      lower.includes("appuntamento")
    ) {
      return [
        '<div class="mirror-request-cta" data-source-form-replaced="true">',
        '<a href="/richiesta-generale/">Prenota una visita</a>',
        "</div>",
      ].join("");
    }
    return form;
  });
}

async function rewriteHtmlFragment(fragment, sourceUrl, pagePath) {
  let output = fragment;

  output = await replaceAsync(output, /\b(href|src|action|poster)\s*=\s*(["'])(.*?)\2/gi, async (match, attr, quote, value) => {
    const rewritten = await rewriteUrl(value, sourceUrl, attr.toLowerCase());
    return `${attr}=${quote}${escapeAttribute(rewritten)}${quote}`;
  });

  output = await replaceAsync(output, /\b(srcset|imagesrcset)\s*=\s*(["'])(.*?)\2/gi, async (match, attr, quote, value) => {
    const rewritten = await rewriteSrcset(value, sourceUrl);
    return `${attr}=${quote}${escapeAttribute(rewritten)}${quote}`;
  });

  output = await replaceAsync(output, /\bcontent\s*=\s*(["'])(https?:\/\/(?:www\.)?sorrisoesalute\.it[^"']*)\1/gi, async (match, quote, value) => {
    const rewritten = absolutizeForMetadata(await rewriteUrl(value, sourceUrl, "content"));
    return `content=${quote}${escapeAttribute(rewritten)}${quote}`;
  });

  output = await replaceAsync(output, /\bcontent\s*=\s*(["'])(https?:\/\/[^"']*sorrisoesalute\.it\/wp-content\/[^"']*)\1/gi, async (match, quote, value) => {
    const rewritten = absolutizeForMetadata(await rewriteUrl(value, sourceUrl, "content"));
    return `content=${quote}${escapeAttribute(rewritten)}${quote}`;
  });

  output = await rewriteCssUrls(output, sourceUrl);
  output = await rewriteEmbeddedAssetUrls(output);
  output = rewriteInlineSourceUrls(output);
  output = applyBrandPaletteColors(output);
  output = applyLocalContentOverrides(output, pagePath);
  output = output.replace(/href=(["'])\/attivita\/implantologia\/?\1/gi, 'href="/implantologia/"');
  output = output.replace(/href=(["'])\/prenota-una-visita\/?\1/gi, 'href="/richiesta-generale/"');
  output = output.replace(/action=(["'])[^"']*\1/gi, 'action="/richiesta-generale/"');
  output = removeNewsReferences(output);
  output = removeBlogSections(output);
  output = output.replace(/\bpage-single-post\b/g, "page-content");
  if (pagePath === "/") output = removeHomeNewsSection(output);
  output = output.replace(/(<link\b[^>]*rel=(["'])canonical\2[^>]*href=(["']))[^"']*?(["'][^>]*>)/i, `$1${TARGET_ORIGIN}${pagePath}$4`);
  return output;
}

async function rewriteEmbeddedAssetUrls(fragment) {
  let output = await replaceAsync(
    fragment,
    /https:\/\/[^"'\s<>()]*sorrisoesalute\.it\/wp-content\/[^"'\s<>()]+/g,
    async (assetUrl) => absolutizeForMetadata(await downloadAsset(assetUrl)),
  );

  output = await replaceAsync(
    output,
    /https:\\\/\\\/[^"]*?sorrisoesalute\.it\\\/wp-content\\\/[^"]+/g,
    async (escapedAssetUrl) => {
      const unescapedUrl = escapedAssetUrl.replace(/\\\//g, "/");
      const localUrl = absolutizeForMetadata(await downloadAsset(unescapedUrl));
      return localUrl.replace(/\//g, "\\/");
    },
  );

  return output;
}

function absolutizeForMetadata(value) {
  if (typeof value === "string" && value.startsWith("/")) return `${TARGET_ORIGIN}${value}`;
  return value;
}

async function rewriteUrl(rawValue, baseUrl, attrName) {
  const decoded = decodeHtmlEntities(rawValue.trim());
  if (!decoded || decoded.startsWith("#")) return rawValue;
  if (/^(mailto|tel|sms|javascript|data|blob):/i.test(decoded)) return rawValue;

  try {
    const url = decoded.startsWith("//") ? new URL(`https:${decoded}`) : new URL(decoded, baseUrl);

    if (isMirrorableAssetUrl(url)) {
      return await downloadAsset(url.toString());
    }

    if (SOURCE_HOSTS.has(url.hostname)) {
      const pagePath = normalizePagePath(url.pathname);
      if (RESERVED_REDIRECTS.has(pagePath)) return RESERVED_REDIRECTS.get(pagePath);
      if (pagePath === "/attivita/implantologia/") return "/implantologia/";
      if (pagePath === "/prenota-una-visita/") return "/richiesta-generale/";
      if (attrName === "action") return "/richiesta-generale/";
      return `${pagePath}${url.hash || ""}`;
    }

    return rawValue;
  } catch {
    return rawValue;
  }
}

async function rewriteSrcset(value, baseUrl) {
  const candidates = value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const rewritten = [];
  for (const candidate of candidates) {
    const parts = candidate.split(/\s+/);
    const url = parts.shift();
    if (!url) continue;
    const nextUrl = await rewriteUrl(url, baseUrl, "srcset");
    rewritten.push([nextUrl, ...parts].join(" "));
  }
  return rewritten.join(", ");
}

async function rewriteCssUrls(fragment, baseUrl) {
  return await replaceAsync(fragment, /url\((["']?)(?!data:|#)([^"')]+)\1\)/gi, async (match, quote, value) => {
    const rewritten = await rewriteUrl(value.trim(), baseUrl, "css-url");
    return `url(${quote}${rewritten}${quote})`;
  });
}

function rewriteInlineSourceUrls(fragment) {
  return fragment
    .replace(/https%3A%2F%2Fwww\.sorrisoesalute\.it%2F/gi, "https%3A%2F%2Fsorrisoesalutemonza.it%2F")
    .replace(/https%3A%2F%2Fsorrisoesalute\.it%2F/gi, "https%3A%2F%2Fsorrisoesalutemonza.it%2F")
    .replace(/https:\\?\/\\?\/www\.sorrisoesalute\.it(?!\\?\/wp-content|\\?\/wp-includes)/g, TARGET_ORIGIN)
    .replace(/https:\\?\/\\?\/sorrisoesalute\.it(?!\\?\/wp-content|\\?\/wp-includes)/g, TARGET_ORIGIN)
    .replace(/https:\/\/www\.sorrisoesalute\.it(?!\/wp-content|\/wp-includes)/g, TARGET_ORIGIN)
    .replace(/https:\/\/sorrisoesalute\.it(?!\/wp-content|\/wp-includes)/g, TARGET_ORIGIN);
}

function isRemovedNewsPath(pagePath) {
  return REMOVED_NEWS_PREFIXES.some((prefix) => pagePath.startsWith(prefix));
}

function shouldSkipProcessedPage(processed, pagePath) {
  const bodyClass = processed.bodyClass || "";
  if (REMOVED_BLOG_ARCHIVE_PREFIXES.some((prefix) => pagePath.startsWith(prefix))) return true;
  if (/\bsingle-post\b/.test(bodyClass)) return true;
  return /\barchive\b/.test(bodyClass) && /\b(?:author|tag|category)\b/.test(bodyClass);
}

function removeNewsReferences(fragment) {
  let output = fragment;
  output = output.replace(/\s*<li\b[^>]*id=(["'])menu-item-7590\1[^>]*>[\s\S]*?<\/li>/gi, "");
  output = output.replace(
    /<li\b[^>]*class=(["'])[^"']*trail-item[^"']*\1[^>]*>\s*<a\b[^>]*href=(["'])\/news\/\2[^>]*>\s*<span>\s*News\s*<\/span>\s*<\/a>\s*<\/li>/gi,
    "",
  );
  output = output.replace(
    /<li>\s*<i\b[^>]*class=(["'])fa-solid fa-tag\1[^>]*>\s*<\/i>\s*<a\b[^>]*href=(["'])\/category\/news\/\2[^>]*>\s*news\s*<\/a>\s*<\/li>/gi,
    "",
  );
  output = output.replace(/\s*<a\b[^>]*href=(["'])\/news(?:\/[^"']*)?\1[^>]*>\s*(?:News|news|Tutte le news)\s*<\/a>/gi, "");
  output = output.replace(/\s*<a\b[^>]*href=(["'])\/category\/news(?:\/[^"']*)?\1[^>]*>\s*news\s*<\/a>/gi, "");
  return removeNewsJsonLdReferences(output);
}

function removeHomeNewsSection(fragment) {
  return fragment.replace(
    /<div class="elementor-element elementor-element-393903a\b[\s\S]*?(?=<div class="elementor-element elementor-element-8806ad1\b)/,
    "",
  );
}

function removeBlogSections(fragment) {
  let output = fragment;
  output = removeElementorParentContaining(
    output,
    /(?:Blog\s*&(?:amp;)?\s*Articoli|Blog\s*&(?:amp;)?\s*Articles|News in evidenzi[aa]|Tutte le news|elementskit-blog-posts|post-items--d4b6bbf)/gi,
  );
  output = output.replace(/<div\b[^>]*class=(["'])[^"']*page-blog-archive[^"']*\1[^>]*>[\s\S]*?<\/main>/gi, "</main>");
  return output;
}

function removeElementorParentContaining(fragment, markerRegex) {
  let output = fragment;
  let markerMatch;
  while ((markerMatch = markerRegex.exec(output))) {
    const markerIndex = markerMatch.index;
    const start = findElementorParentStart(output, markerIndex);
    if (start < 0) {
      markerRegex.lastIndex = markerIndex + markerMatch[0].length;
      continue;
    }

    const end = findBalancedDivEnd(output, start);
    if (end < 0) {
      markerRegex.lastIndex = markerIndex + markerMatch[0].length;
      continue;
    }

    output = `${output.slice(0, start)}${output.slice(end)}`;
    markerRegex.lastIndex = 0;
  }
  return output;
}

function findElementorParentStart(html, index) {
  const patterns = [
    /<div\b[^>]*class=(["'])[^"']*elementor-element[^"']*\be-parent\b[^"']*\1[^>]*>/gi,
    /<section\b[^>]*class=(["'])[^"']*elementor-section[^"']*\1[^>]*>/gi,
  ];
  let best = -1;
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(html)) && match.index < index) {
      best = Math.max(best, match.index);
    }
  }
  return best;
}

function findBalancedDivEnd(html, start) {
  const tagRegex = /<\/?div\b[^>]*>/gi;
  tagRegex.lastIndex = start;
  let depth = 0;
  let match;
  while ((match = tagRegex.exec(html))) {
    depth += match[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return tagRegex.lastIndex;
  }
  return -1;
}

function removeNewsJsonLdReferences(fragment) {
  return fragment.replace(/<script\b([^>]*)type=(["'])application\/ld\+json\2([^>]*)>([\s\S]*?)<\/script>/gi, (match, before, quote, after, json) => {
    try {
      const parsed = JSON.parse(json.trim());
      return `<script${before}type=${quote}application/ld+json${quote}${after}>${JSON.stringify(sanitizeJsonLd(parsed))}</script>`;
    } catch {
      return match;
    }
  });
}

function sanitizeJsonLd(value) {
  if (Array.isArray(value)) {
    return value.map(sanitizeJsonLd).filter((item) => !isNewsBreadcrumbItem(item));
  }

  if (!value || typeof value !== "object") return value;

  const output = {};
  for (const [key, nextValue] of Object.entries(value)) {
    output[key] = sanitizeJsonLd(nextValue);
  }

  const type = Array.isArray(output["@type"]) ? output["@type"].join(" ") : String(output["@type"] || "");
  if (/BreadcrumbList/i.test(type) && Array.isArray(output.itemListElement)) {
    output.itemListElement = output.itemListElement
      .filter((item) => !isNewsBreadcrumbItem(item))
      .map((item, index) => ({ ...item, position: index + 1 }));
  }

  return output;
}

function isNewsBreadcrumbItem(item) {
  if (!item || typeof item !== "object" || Array.isArray(item)) return false;
  const name = String(item.name || "").toLowerCase();
  const link = String(item.item || item.url || "").toLowerCase();
  return name === "news" && (link.includes("/news/") || link.includes("/category/news/"));
}

function appendMirrorOverrides(head) {
  return `${head}
<style id="mirror-local-overrides">
  .mirror-request-cta {
    margin: 24px 0;
    text-align: center;
  }
  .mirror-request-cta a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 14px 26px;
    border-radius: 999px;
    background: #1e37b7;
    color: #fff !important;
    font-weight: 800;
    text-decoration: none !important;
    box-shadow: 0 14px 30px rgba(30, 55, 183, 0.22);
  }
</style>`;
}

function applyBrandPaletteColors(fragment) {
  const replacements = [
    [/#[0O]E384C1A\b/gi, "rgba(191, 197, 210, 0.36)"],
    [/#[0O]E384C38\b/gi, "rgba(191, 197, 210, 0.58)"],
    [/#[0O]E384C12\b/gi, "#BFC5D2"],
    [/#FFFFFF1F\b/gi, "rgba(191, 197, 210, 0.58)"],
    [/#[0O]E384C\b/gi, "#1e37b7"],
    [/#1E84B5\b/gi, "#1e37b7"],
    [/#527282\b/gi, "#475569"],
    [/#F9FCFF\b/gi, "#FFFFFF"],
    [/#5E5EEE\b/gi, "#1e37b7"],
    [/#2148d8\b/gi, "#1e37b7"],
  ];

  return replacements.reduce((output, [pattern, value]) => output.replace(pattern, value), fragment);
}

function applyLocalContentOverrides(fragment, pagePath) {
  if (pagePath !== "/") return fragment;

  return fragment
    .replace(/\/mirror-assets\/9bd0210bdaa620a4\.jpg/g, "/assets/home-hero-dental-patient.png")
    .replace(
      /(<div\b[^>]*\bid=(["'])hero-video\2[^>]*\bdata-settings=)(["'])[\s\S]*?\3/gi,
      "$1$3{&quot;background_background&quot;:&quot;classic&quot;}$3",
    )
    .replace(
      /<div class=(["'])elementor-background-video-container\1>\s*<div class=(["'])elementor-background-video-embed\2 role=(["'])presentation\3><\/div>\s*<\/div>/gi,
      "",
    );
}

function isMirrorableAssetUrl(url) {
  if (url.protocol !== "http:" && url.protocol !== "https:") return false;
  const pathname = url.pathname.toLowerCase();
  const ext = path.extname(pathname);

  if (SOURCE_HOSTS.has(url.hostname)) {
    return pathname.includes("/wp-content/") || pathname.includes("/wp-includes/") || ASSET_EXTENSIONS.has(ext);
  }

  if (url.hostname.includes("optimole.com") && url.toString().includes("sorrisoesalute.it/wp-content/")) return true;
  if (url.hostname.includes("gstatic.com") || url.hostname.includes("googleapis.com")) return ASSET_EXTENSIONS.has(ext);
  return false;
}

async function downloadAsset(assetUrl) {
  if (assetMap.has(assetUrl)) return assetMap.get(assetUrl);

  const hash = createHash("sha1").update(assetUrl).digest("hex").slice(0, 16);
  const pendingLocalUrl = `/mirror-assets/${hash}`;
  assetMap.set(assetUrl, pendingLocalUrl);

  try {
    const response = await fetchWithTimeout(assetUrl);
    if (!response.ok) throw new Error(`asset status ${response.status}`);
    const contentType = response.headers.get("content-type")?.split(";")[0].trim().toLowerCase() || "";
    const extension = extensionForAsset(assetUrl, contentType);
    const localUrl = `${pendingLocalUrl}${extension}`;
    const localFile = path.join(ASSET_DIR, `${hash}${extension}`);
    assetMap.set(assetUrl, localUrl);

    const buffer = Buffer.from(await response.arrayBuffer());
    if (extension === ".css" || contentType === "text/css") {
      const css = buffer.toString("utf8");
      const rewrittenCss = await rewriteCssUrls(
        applyBrandPaletteColors(removeSourceMagicCursorStyles(removeSourcePreloaderStyles(css))),
        assetUrl,
      );
      await writeFile(localFile, rewrittenCss);
    } else if (extension === ".svg" || contentType === "image/svg+xml") {
      const svg = buffer.toString("utf8");
      const rewrittenCss = applyBrandPaletteColors(svg);
      await writeFile(localFile, rewrittenCss);
    } else {
      await writeFile(localFile, buffer);
    }

    return localUrl;
  } catch (error) {
    failedAssets.push({ url: assetUrl, error: error.message });
    assetMap.set(assetUrl, MISSING_ASSET_URL);
    return MISSING_ASSET_URL;
  }
}

async function writeMissingAsset() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-label="Immagine non disponibile"><rect width="1200" height="800" fill="#f2f4f7"/><path d="M390 500l120-150 90 110 70-82 140 122H390z" fill="#d4dbe7"/><circle cx="760" cy="292" r="45" fill="#d4dbe7"/></svg>`;
  await writeFile(MISSING_ASSET_FILE, svg);
}

function removeSourcePreloaderStyles(css) {
  return css.replace(/\n?\.preloader\{[\s\S]*?\n(?=\.column-2\s+\.elementor-icon-list-items\{)/i, "\n");
}

function removeSourceMagicCursorStyles(css) {
  return css
    .replace(/\n?#magic-cursor\{[\s\S]*?\n(?=\.column-2\s+\.elementor-icon-list-items\{)/i, "\n")
    .replace(/\n\s*#magic-cursor\s*\{\s*display:\s*none\s*!important;\s*\}\n/gi, "\n");
}

function extensionForAsset(assetUrl, contentType) {
  const pathname = new URL(assetUrl).pathname;
  const ext = path.extname(pathname).toLowerCase();
  if (ASSET_EXTENSIONS.has(ext)) return ext;
  return CONTENT_TYPE_EXTENSIONS.get(contentType) || ".bin";
}

async function fetchText(url) {
  const response = await fetchWithTimeout(url);
  if (!response.ok) throw new Error(`status ${response.status} for ${url}`);
  return await response.text();
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    return await fetch(url, {
      headers: { "user-agent": USER_AGENT },
      redirect: "follow",
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function fileBaseForPath(pagePath) {
  if (pagePath === "/") return "home";
  return pagePath
    .replace(/^\/|\/$/g, "")
    .replace(/[^a-z0-9_-]+/gi, "__")
    .toLowerCase();
}

async function replaceAsync(input, regex, replacer) {
  const parts = [];
  let lastIndex = 0;
  for (const match of input.matchAll(regex)) {
    parts.push(input.slice(lastIndex, match.index));
    parts.push(await replacer(...match));
    lastIndex = match.index + match[0].length;
  }
  parts.push(input.slice(lastIndex));
  return parts.join("");
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'");
}

function escapeAttribute(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
