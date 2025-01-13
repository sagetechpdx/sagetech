import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "http://sagetech.netlify.app",
  integrations: [tailwind()],
  output: "static",
  adapter: netlify(),
  alias: {
    "@components": "./src/components",
    "@layouts": "./src/layouts",
    "@styles": "./src/styles"
  }
});
