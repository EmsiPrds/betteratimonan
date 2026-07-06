/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-brand-blue', 'bg-brand-navy', 'bg-brand-yellow', 'bg-brand-orange', 'bg-brand-white',
    'text-brand-blue', 'text-brand-navy', 'text-brand-yellow', 'text-brand-orange',
    'border-brand-blue', 'border-brand-yellow', 'border-brand-orange',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:       '#003696', // primary blue
          navy:       '#00184d', // deep navy
          yellow:     '#f2c91d', // golden yellow
          orange:     '#ea580c', // vivid orange
          white:      '#ffffff',
        },
        primary: {
          50:  '#e6edf8',
          100: '#ccdaf1',
          200: '#99b5e3',
          300: '#6690d5',
          400: '#336bc7',
          500: '#003696',
          600: '#002b78',
          700: '#00205a',
          800: '#00184d', // same as brand.navy
          900: '#000f30',
        },
        accent: {
          50:  '#fefbe8',
          100: '#fdf6c3',
          200: '#fbed87',
          300: '#f9e44b',
          400: '#f2c91d', // brand yellow
          500: '#d4a900',
          600: '#a68500',
          700: '#786100',
          800: '#4a3c00',
          900: '#1c1800',
        },
        orange: {
          50:  '#fef0e8',
          100: '#fde0d1',
          200: '#fbc1a3',
          300: '#f89275',
          400: '#f67347',
          500: '#ea580c', // brand orange
          600: '#c44a0a',
          700: '#9e3c08',
          800: '#782e06',
          900: '#522004',
        },
        background: '#ffffff',
        foreground: '#00184d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'count-up': 'countUp 1s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
