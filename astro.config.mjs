import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sorrisoesalutemonza.it",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("/attivita/implantologia/") &&
        !page.endsWith("/attivita/protesi-dentale/") &&
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
