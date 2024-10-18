import { MdOpacity } from "react-icons/md";
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
      backgroundImage:{
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
