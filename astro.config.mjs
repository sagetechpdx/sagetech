import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://sagetech.netlify.app",
  integrations: [tailwind()],
  output: "static",
  adapter: netlify(),
  alias: {
    "@components": "./src/components",
    "@layouts": "./src/layouts",
    "@styles": "./src/styles"
  }
});
