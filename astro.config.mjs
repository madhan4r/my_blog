import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Used for canonical URLs, share images and the sitemap.
  site: 'https://madhan.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
