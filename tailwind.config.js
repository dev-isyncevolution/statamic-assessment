// tailwind.config.js
module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  safelist: [
    'swiper-button-disabled',
    'opacity-50',
  ],
  variants: {
    extend: {
      opacity: ['group-disabled'], // optional if using custom group logic
    },
  },
  plugins: [],
};
