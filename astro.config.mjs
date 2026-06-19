import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sorrisoesalutemonza.it",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  devToolbar: {
    enabled: false,
  },
  output: "static",
});
