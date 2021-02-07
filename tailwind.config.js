module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './projects/**/*.html',
    './projects/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'pacifico': ['Pacifico', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
