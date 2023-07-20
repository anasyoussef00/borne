import plugin from 'tailwindcss/plugin';

const backfaceVisibility = plugin(({ addUtilities }) => {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visibile',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden',
    },
  });
});

/** @type {import("tailwindcss").Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      '400%': '400%',
    },
    extend: {
      colors: {
        'primary-background': '#F4E0B9',
        'primary-text': '#27374D',
        primary: '#7D7463',
        secondary: '#A8A196',
        danger: '#FE0000',
      },
    },
  },
  plugins: [backfaceVisibility],
};
