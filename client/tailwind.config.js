/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [ daisyui,],
  daisyui: {
    themes: ["light", 
      {
        black:{
          ...daisyUIThemes["black"],
          primary:"rgb(29,155,240)",
          secondary:"rgb(24,24,24)"

        }
      }

    ],
  },
    
}

