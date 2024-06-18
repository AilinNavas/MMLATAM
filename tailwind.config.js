const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      keyframes: {
        infinite_scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 0.25rem))' },
        },
      },
      animation: {
        infinite_scroll: 'infinite_scroll 20s linear infinite',
      },
      // keyframes: {
      //   infinite_scroll: {
      //     "100%" : { transform: "translate(calc(-50% - 0.25rem))"}
      //   }
      // },
      // animation: { infinite_scroll: "infinite_scroll 20s linear infinite"},
      screens: {
       
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1600px',
      },
      fontSize: {
        '3/5xl': ['2.125rem', {
          lineHeight: '3.375rem',
        }],
      },

    },
  },
  plugins: [],
};
