export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  watch: {
    include: 'src/*.js',
    exclude: 'node_modules',
    clearScreen: false
  }
};
