import { readdir, writeFile } from "node:fs/promises";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { MAINTENANCE_MODE } from "./src/config/maintenance";

const maintenancePage = `<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Sito in manutenzione</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      html, body { min-height: 100%; margin: 0; }
      body {
        display: grid;
        min-height: 100svh;
        place-items: center;
        padding: 2rem;
        background: #fff;
        color: #0e384c;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        text-align: center;
      }
      h1 {
        margin: 0;
        font-size: clamp(2rem, 6vw, 4rem);
        font-weight: 600;
        line-height: 1.1;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Sito in manutenzione</h1>
    </main>
  </body>
</html>
`;

const findHtmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const matches = await Promise.all(
    entries.map((entry) => {
      const entryUrl = new URL(entry.name + (entry.isDirectory() ? "/" : ""), directory);

      if (entry.isDirectory()) return findHtmlFiles(entryUrl);
      if (entry.isFile() && entry.name.endsWith(".html")) return [entryUrl];

      return [];
    }),
  );

  return matches.flat();
};

const globalMaintenanceMode = () => ({
  name: "global-maintenance-mode",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      if (!MAINTENANCE_MODE) return;

      const htmlFiles = await findHtmlFiles(dir);

      await Promise.all(htmlFiles.map((file) => writeFile(file, maintenancePage)));
      await writeFile(new URL("404.html", dir), maintenancePage);
    },
  },
});

export default defineConfig({
  site: "https://sorrisoesalutemonza.it",
  integrations: [
    globalMaintenanceMode(),
    sitemap({
      filter: (page) =>
        !page.endsWith("/attivita/implantologia/") &&
        !page.endsWith("/attivita/protesi-dentale/") &&
        !page.endsWith("/implantologia/percorso/") &&
        !page.endsWith("/richiesta/") &&
        !page.endsWith("/prenota-una-visita/"),
    }),
  ],
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
  output: "static",
});
