// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
// SITE_URL / BASE_PATH let the GitHub Pages build live under qballer.github.io/kraft.dev
// until kraft.dev points at it; locally and on the custom domain the base is '/'.
export default defineConfig({
  site: process.env.SITE_URL || 'https://kraft.dev',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
