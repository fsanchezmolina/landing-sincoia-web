// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// IMPORTANTE: mantener `site` igual que `site.url` en src/config/site.ts
// https://astro.build/config
export default defineConfig({
  site: 'https://sincroia.es', // dominio definitivo (debe coincidir con site.url)
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
