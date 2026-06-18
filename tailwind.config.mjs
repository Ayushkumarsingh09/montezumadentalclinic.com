/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F3EDE3',
          300: '#E8DFD0',
        },
        sage: {
          50: '#F0F5F4',
          100: '#D9E8E5',
          200: '#B3D1CB',
          300: '#7AADA4',
          400: '#4D8A80',
          500: '#2D6A6A',
          600: '#245656',
          700: '#1C4444',
          800: '#153333',
          900: '#0F2525',
        },
        amber: {
          warm: '#C4915A',
          light: '#E8C9A0',
          dark: '#9A7344',
        },
        charcoal: {
          DEFAULT: '#1A2332',
          light: '#3D4A5C',
          muted: '#6B7A8D',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(26, 35, 50, 0.06)',
        card: '0 8px 32px rgba(26, 35, 50, 0.08)',
        elevated: '0 16px 48px rgba(26, 35, 50, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
