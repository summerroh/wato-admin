/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      sidebar: '#1F1E24;',
      plus: '#F2F7FF',
    }),
    extend: {
      colors: {
        life: '#54BD95',
        plusplus: '#0061FF',
        link: '#6F6F6F',
        button: '#54BD95',
        blueplus: '#0061FF',
      },
    },
  },
  plugins: [],
};
