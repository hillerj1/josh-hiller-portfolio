import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joshhiller.com', // change when domain is ready
  integrations: [sitemap()],
});
