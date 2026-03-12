import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        cinnabar: {
          DEFAULT: '#E2442F',
          50: '#FBE9E6',
          100: '#F8D7D1',
          200: '#F2B3A8',
          300: '#EC8E7F',
          400: '#E76956',
          500: '#E2442F',
          600: '#C72E19',
          700: '#972313',
          800: '#67180D',
          900: '#370D07',
        },
        teal: {
          DEFAULT: '#45B7C0',
          50: '#E8F7F9',
          100: '#D1EFF2',
          200: '#A3DFE5',
          300: '#74CFD8',
          400: '#46BFCB',
          500: '#45B7C0',
          600: '#349199',
          700: '#266D73',
          800: '#19484C',
          900: '#0B2426',
        },
        jonquil: {
          DEFAULT: '#F4D03F',
          50: '#FEFBF0',
          100: '#FDF6DC',
          200: '#FBEDB4',
          300: '#F8E38C',
          400: '#F6DA65',
          500: '#F4D03F',
          600: '#EFC413',
          700: '#C09F0D',
          800: '#8F7709',
          900: '#5E4F06',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          50: '#F5F5F7',
          100: '#E5E5EA',
          200: '#D1D1D6',
          300: '#AEAEB2',
          400: '#8E8E93',
          500: '#636366',
          600: '#48484A',
          700: '#2C2C2E',
          800: '#1A1A25',
          900: '#12121A',
          950: '#0A0A0F',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(226,68,47,0.15), transparent)",
        "section-gradient": "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(69,183,192,0.08), transparent)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
