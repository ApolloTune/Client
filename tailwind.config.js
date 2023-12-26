/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontWeight: {
        interBoldItalic: '700',
      },
      fontFamily : {
        'sansi': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],

      },
      colors: {
        red: {
          50: "#FD005D",
          100: "#B60546"
        },
        pink: {
          50: "#D3004D"
        },
        black: {
          50: "#272727",
          100: "#242424",
          125: "#363636",
          150: "#FFFFFF"
        },
        blue: {
          50: "#DAFFFB"
        },
        pink: {
          50: "#D3004D"
        },
        pink: {
          50: "#D3004D"
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

