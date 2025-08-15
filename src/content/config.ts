import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    problem: z.string(),
    solution: z.string(),
    techstack: z.array(z.string()),
    github: z.string().url(),
    demo: z.string().url().optional().or(z.literal('')),
    image: z.string(), // path in /public
    date: z.string().optional(),
  }),
});

export const collections = { projects };
