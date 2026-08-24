/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#030712',
          900: '#0a0a0b',
          850: '#111827',
          800: '#1f2937',
          700: '#374151',
        },
        blood: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        ember: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'blood-glow': '0 0 24px -2px rgba(220, 38, 38, 0.55)',
        'blood-glow-lg': '0 0 48px 4px rgba(220, 38, 38, 0.45)',
        'card': '0 10px 40px -12px rgba(220, 38, 38, 0.18)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 18px -2px rgba(220,38,38,0.55)' },
          '50%': { boxShadow: '0 0 38px 4px rgba(249,115,22,0.6)' },
        },
        'flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        'flicker': 'flicker 4s linear infinite',
      },
    },
  },
  plugins: [],
};
