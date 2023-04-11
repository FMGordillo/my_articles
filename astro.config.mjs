import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    remarkPlugins: [remarkToc],
  })]
});
