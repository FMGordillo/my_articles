import { z, defineCollection } from "astro:content";

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
