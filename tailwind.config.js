/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Obsidian & Charcoal Foundation
        noir: {
          950: '#07080A',
          900: '#0D0E11',
          850: '#121317',
          800: '#17181E',
          700: '#20222A',
          600: '#2A2C37',
        },
        // Warm Champagne, Amber & Sand Accents
        amber: {
          DEFAULT: '#E5C578',
          light: '#F3DB9E',
          dark: '#C8A44D',
          muted: '#A58639',
        },
        sand: {
          DEFAULT: '#C8B195',
          light: '#E2D3BF',
          dark: '#9E8467',
        },
        // Editorial Typography Shades
        alabaster: '#F6F5F2',
        smoke: '#D4D5DC',
        slate: {
          DEFAULT: '#9698A0',
          dark: '#62646D',
        },
        // Live Status Green
        emerald: {
          DEFAULT: '#10B981',
          glow: 'rgba(16, 185, 129, 0.4)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'luxury': '0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.06)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'amber-glow': '0 0 35px -5px rgba(229, 197, 120, 0.25)',
      }
    },
  },
  plugins: [],
}
