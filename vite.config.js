import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

const get = (o, key) => key.split('.').reduce((v, k) => v?.[k], o);
const attr = (v) => String(v).replace(/&(?!\w+;|#\d+;)/g, '&amp;').replace(/"/g, '&quot;').replace(/<[^>]+>/g, '');

// en.json is the single source of every visible string: the build writes it into index.html and fails on a missing key.
function englishIntoHtml() {
  return {
    name: 'i18n-english',
    transformIndexHtml(html) {
      const en = JSON.parse(readFileSync(new URL('./src/locales/en.json', import.meta.url), 'utf8'));
      const need = (key) => {
        const v = get(en, key);
        if (typeof v !== 'string') throw new Error(`i18n: key "${key}" used in index.html is missing from en.json`);
        return v;
      };
      return html
        // elements carrying a key never nest their own tag
        .replace(/<(\w+)(\s[^>]*?data-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g, (_, tag, attrs, key) => `<${tag}${attrs}>${need(key)}</${tag}>`)
        .replace(/<[^>]*data-i18n-(aria|content|placeholder)="([^"]+)"[^>]*>/g, (tag, kind, key) => {
          const name = kind === 'aria' ? 'aria-label' : kind;
          return tag.replace(new RegExp(`\\s${name}="[^"]*"`), ` ${name}="${attr(need(key))}"`);
        });
    },
  };
}

export default defineConfig({
  plugins: [englishIntoHtml()],
  base: './', // relative asset paths: the build works from the domain root or any subfolder
});
