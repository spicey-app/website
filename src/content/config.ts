import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('The Spicey team'),
    tags: z.array(z.string()).default([]),
    readTime: z.string().optional(),
    heroEmoji: z.string().optional(),
    heroGradient: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
