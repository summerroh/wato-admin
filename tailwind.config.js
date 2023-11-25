/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      sidebar: '#1F1E24;',
    }),
    extend: {
      colors: {
        life: '#54BD95',
        plusplus: '#0061FF',
        link: '#6F6F6F',
      },
    },
  },
  plugins: [],
};
