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
        // GymOps Brand Colors (from CrossFit Leiden palette)
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
        verdigris: {
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
        violet: {
          DEFAULT: '#8E44AD',
          50: '#F3EBF7',
          100: '#E7D7EF',
          200: '#CFAFE0',
          300: '#B787D0',
          400: '#9F5FC1',
          500: '#8E44AD',
          600: '#733895',
          700: '#562A6F',
          800: '#3A1C4A',
          900: '#1D0E25',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
