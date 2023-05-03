import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';
import vercel from "@astrojs/vercel/serverless";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), mdx({
    remarkPlugins: [remarkToc]
  }), solidJs()],
  adapter: vercel({
    analytics: true
  })
});