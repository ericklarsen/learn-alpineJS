module.exports = {
  mode: "jit",
  purge: [
    './layouts/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width : {
        "fit-content" : "fit-content"
      },
      height : {
        "fit-content" : "fit-content"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
