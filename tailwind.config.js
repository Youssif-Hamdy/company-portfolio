/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f4ff',
          100: '#e0e9fe',
          200: '#bae0fd',
          300: '#7cc5fd',
          400: '#36a7fa',
          500: '#0c87e7',
          600: '#0269c4',
          700: '#03549f',
          800: '#074783',
          900: '#0c3c6e',
          950: '#082649',
        },
        accent: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
        },
        dark: {
          bg: '#090d16',
          card: '#111827',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#1f293d',
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(12, 135, 231, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(6, 182, 212, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon-blue': '0 0 20px rgba(12, 135, 231, 0.4)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.4)',
      }
    },
  },
  plugins: [],
}
