/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-landing': "url('/images/mobileLanding.webp')",
      }
    },
  },
  plugins: [],
}

