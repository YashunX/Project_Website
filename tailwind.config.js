/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        'bounce-custom': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0) translateX(-50%)',
          },
          '40%': {
            transform: 'translateY(-10px) translateX(-50%)',
          },
          '60%': {
            transform: 'translateY(-5px) translateX(-50%)',
          },
        },
        'pulse-custom': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(0, 90, 170, 0.4)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(0, 90, 170, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(0, 90, 170, 0)',
          },
        },
      },
      animation: {
        'bounce-custom': 'bounce-custom 2s infinite',
        'pulse-custom': 'pulse-custom 2s infinite',
      },
    },
  },
  plugins: [],
}
