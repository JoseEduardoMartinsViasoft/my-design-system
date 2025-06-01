/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,stories.*}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'scrollbar-track': 'var(--scrollbar-track)',
        'scrollbar-thumb': 'var(--scrollbar-thumb)',
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
          1000: 'var(--gray-1000)'
        },
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        secondary: 'var(--secondary)',
        'secondary-hover': 'var(--secondary-hover)',
        success: 'var(--success)',
        'success-hover': 'var(--success-hover)',
        error: 'var(--error)',
        'error-hover': 'var(--error-hover)',
        warning: 'var(--warning)',
        'warning-hover': 'var(--warning-hover)',
        info: 'var(--info)',
        'info-hover': 'var(--info-hover)'
      }
    }
  },
  plugins: []
};
