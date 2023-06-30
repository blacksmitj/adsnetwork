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
        'oren': '#EF673D',
        'kuning': '#FDBC22',
        'pink': '#B42184',
        'biru': '#211C5C',
        'birumuda': '#73BCDB',
        'hitam': '#1E1E1E',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(10px)' },
          '20%': { transform: 'translateX(-10px)' },
          '70%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateY(10px)' },
        },
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      }
    },
  },
  plugins: [],
}
