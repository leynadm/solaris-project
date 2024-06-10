/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-landing': "url('/images/mobileLanding.webp')",
        'desktop-landing': "url('/images/desktopLanding.webp')",
        'footer-formTree':"url('/images/formTree.webp')",
        'fade-white': 'linear-gradient(to top, white, rgba(256,256,256,0))',
      }
    },
  },
  plugins: [],
}

