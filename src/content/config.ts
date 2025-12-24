import { defineCollection, z } from 'astro:content';

const i18nSchema = z.object({
  en: z.string(),
  zh: z.string(),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: i18nSchema,
    description: i18nSchema.optional(),
    owners: z.array(z.string()),
    repo: z.union([
      z.string().url(),
      z.object({
        owner: z.string(),
        name: z.string(),
      }),
    ]).optional(),
    homepage: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  projects,
  posts,
};
