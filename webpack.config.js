const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    calc: './src/calc/index.js'
  },
  output: {
    globalObject: 'this',
    library: {
      name: 'calc',
      type: 'umd'
    },
    path: path.resolve(__dirname, 'src'),
    filename: '[name]/dist/index.js',
  }
}
