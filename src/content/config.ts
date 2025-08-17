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
    image: z.string(),
    date: z.string().optional(),
    group: z.enum(['Software', 'Quantum']),
  }),
});

const certifications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string().optional(),           // <-- make optional
    credentialId: z.string().optional(),
    verifyUrl: z.string().url().optional(),
    skills: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string().optional(),
    org: z.string().optional(),
    link: z.string().url().optional(),
    avatar: z.string().optional(),
    date: z.string().optional(),
  }),
});

    const skills = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // e.g., "Languages"
    items: z.array(
      z.object({
        name: z.string(),              // "Python"
        level: z.number().int().min(1).max(5), // 1–5
        note: z.string().optional(),   // optional short note
      })
    ),
    order: z.number().optional(),      // to control section order
  }),
});

export const collections = { projects, certifications, testimonials, skills};
