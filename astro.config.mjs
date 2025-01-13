import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://sagetech.vercel.app",
  integrations: [react(), tailwind()], 
  output: 'server',
  adapter: vercel(),
});