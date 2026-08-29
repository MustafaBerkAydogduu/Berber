/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kadir Alkan Signature Gold & Bronze Palette
        gold: {
          DEFAULT: '#9E7A3B',
          light: '#C5A059',
          dark: '#7A5C28',
          bright: '#B8860B',
          muted: '#8A6D3B',
          tint: '#F9F5EC',
        },
        // Kadir Alkan Dark Luxury Studio Sections
        dark: {
          DEFAULT: '#161719',
          950: '#0F1012',
          900: '#161719',
          850: '#1A1B1E',
          800: '#222428',
          700: '#2C2E34',
        },
        // Studio Light Backgrounds
        studio: {
          DEFAULT: '#EBECEE',
          50: '#FAFAFB',
          100: '#F4F5F7',
          200: '#EBECEE',
          300: '#DCDDE1',
        },
        // Semantic Compatibility
        amber: {
          DEFAULT: '#9E7A3B',
          light: '#C5A059',
          dark: '#7A5C28',
        },
        noir: {
          950: '#161719',
          900: '#1A1B1E',
          850: '#222428',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        signature: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'kadir': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'kadir-dark': '0 20px 50px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
