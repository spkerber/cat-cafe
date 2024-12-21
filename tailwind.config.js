/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#E2EBF3',  // Light sky blue
          DEFAULT: '#7C9CB6', // Muted ocean blue
          dark: '#2A4155',   // Deep ocean blue
        },
        accent: {
          light: '#FFE8D6',  // Soft sunset glow
          DEFAULT: '#F5A572', // Warm sunset orange
          dark: '#B65B36',   // Deep sunset
        },
        neutral: {
          50: '#F8FAFC',
          100: '#E2EBF3',
          200: '#C5D5E4',
          300: '#95AFC7',
          400: '#7C9CB6',
          500: '#5B7A96',
          600: '#4A6075',
          700: '#2A4155',
          800: '#1B2A38',
          900: '#0F1A24',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}