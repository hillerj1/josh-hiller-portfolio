import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  markdown: {
    remarkPlugins: [[remarkMath, {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
    }]],
    rehypePlugins: [rehypeKatex],
  },
  // optional but nice:
  // site: 'https://josh-hiller.com',
});
