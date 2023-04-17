import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), mdx({
    remarkPlugins: [remarkToc]
  })],
  adapter: vercel({
    analytics: true
  }),
});
