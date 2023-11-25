/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Poppins'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      sidebar: '#1F1E24;',
      plus: '#F2F7FF',
      ...theme('colors'),
      sidebar: '#1F1E24;',
    }),
    extend: {
      colors: {
        life: '#54BD95',
        plusplus: '#0061FF',
        link: '#6F6F6F',
      },
      mainBackgroundImage: {
        'main-right': "url('/src/images/main-right.png')",
      },
      lineHeight: {
        'extra-tight': '1.1',
        life: '#54BD95',
        plusplus: '#0061FF',
        link: '#6F6F6F',
        button: '#54BD95',
        blueplus: '#0061FF',
      },
      mainBackgroundImage: {
        'main-right': "url('/src/images/main-right.png')",
      },
      lineHeight: {
        'extra-tight': '1.1',
        button: '#54BD95',
        blueplus: '#0061FF',
      },
      mainBackgroundImage: {
        'main-right': "url('/src/images/main-right.png')",
      },
      lineHeight: {
        'extra-tight': '1.1',
        button: '#54BD95',
        blueplus: '#0061FF',
      },
      mainBackgroundImage: {
        'main-right': "url('/src/images/main-right.png')",
      },
      lineHeight: {
        'extra-tight': '1.1',
        life: '#54BD95',
        plusplus: '#0061FF',
        link: '#6F6F6F',
        button: '#54BD95',
        blueplus: '#0061FF',
      },
      mainBackgroundImage: {
        'main-right': "url('/src/images/main-right.png')",
      },
      lineHeight: {
        'extra-tight': '1.1',
      },
    },
  },
  plugins: [],
};
