import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['var(--inter)', ...defaultTheme.fontFamily.sans,]
      },
      colors: {
        primary:{
          DEFAULT:'#BBEC33'
        },
        secondary: {
          DEFAULT:'',
          50:'#004E50',
          100:'#003234',
        },
        blue:{
          DEFAULT:'',
        }
      },
      backgroundImage:{
        'gradient-1':'linear-gradient(180deg, #023233 0%, #014E51 125.09%)',
       'gradient-2':'linear-gradient(90deg, #794FFC 20.94%, #5873FD 42.5%)'
      }

    },
  },
  plugins: [],
} satisfies Config;
