module.exports = {
  content: [
     "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    creens: {
      'mobile': '410px', 
      // => @media (min-width: 410px) { ... }

      'tablet': '640px', 
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'primary' : '#31326f'
    },
}
