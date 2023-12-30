/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors: {
        'btyellow': '#fac713',
        'btgreen': '#03a580',
        'bggrey': '#f6f4ff',
        'btpurple': '#2d194e',
        'bgdark-grey': '#6B6B6B',
        'btpink': '#ee3658',
        'btblue': '#0085fe',
        'transparent': 'transparent',
        'nomgrey':'#eff2f9',
        
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"]
      },
    },
   
  },
  plugins: [],
};
