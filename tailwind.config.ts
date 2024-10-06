import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores configurados en globals.css
        background: "var(--background)",
        foreground: "var(--foreground)",
        complementary: "var(--complementary)",
        tittle: "var(--tittle)",
      },
      screens: {
        //Pantallas para movil
        'ss': '320px',
        // => @media (min-width: 320px)
        'xxs': '390px',
        // => @media (min-width: 390px)
        'xs': '414px',
        // => @media (min-width: 414px)
        'sm': '640px',
        // => @media (min-width: 640px)

        //Pantallas para tablet
        'md': '768px',
        // => @media (min-width: 768px)
        'mdx': '820px',
        // => @media (min-width: 820px)
        'mdxx': '880px',
        // => @media (min-width: 880px)

        // Pantallas para pc
        'lg': '1024px',
        // => @media (min-width: 1024px)
        'xl': '1280px',
        // => @media (min-width: 1280px)
        '2xl': '1536px',
        // => @media (min-width: 1536px)
        '3xl': '1920px',
        // => @media (min-width: 1920px)
      }
    },
  },
  plugins: [],
};
export default config;
