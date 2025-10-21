// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://samkitsheth95.github.io',
  base: '/goldmine_multitrade_masterbatch/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ]
});
