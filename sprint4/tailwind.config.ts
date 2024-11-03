import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing:{
        'screen-h': '710px'
      },
      screens: {
        ms: '320px',
        mm: '375px',
        ml: '425px',
        tb: '768px',
        lp: '1024px',
        ll: '1440px',
        '4k': '2560px',
      },
      backgroundImage: {
        bannerImg: "url('/mecanica.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        azul: '#0085ff',
        preto: '#0C0C0C',
        azulescuro: '#0069CC',
        cinza: '#E0E0E0',
        cinzaescuro: '#222222',
        branco: '#ffffff',
        escuro: '#0C0C0C',
      },
    },
  },
  plugins: [],
};

export default config;
