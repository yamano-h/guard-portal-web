import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import emdash from "emdash/astro";
import { d1 } from "emdash/db";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [
    react(),
    emdash({
      database: d1(),
      session: "auto",
      storage: { binding: "MEDIA" },
    }),
  ],
  devToolbar: { enabled: false },
});
