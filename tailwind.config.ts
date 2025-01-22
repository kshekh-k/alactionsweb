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
          50:'#8C3BFC'
        },
        liteyellow:{
          50:'#FFCC85',
        },
        litewhite:{
          50:'#BCBCBC',
          100:'#FFF9F3'
        },
        naviblue:{
          50:'#45426E',
          100:'#1E1E1E',
          200:'#1E1E1E',
          300:'#45426E',
        },
        rose:{
          50:'#FC5BFF'
        },
        pink:{
          50:'#DE238E'
        },
      },
      backgroundImage:{
        'gradient-1':'linear-gradient(180deg, #023233 0%, #014E51 125.09%)',
       'gradient-2':'linear-gradient(90deg, #794FFC 20.94%, #5873FD 42.5%)'
      }

    },
  },
  plugins: [],
} satisfies Config;
