const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: {
    calc: './src/calc/index.js',
    add: './src/calc/add/index.js',
    subtract: './src/calc/subtract/index.js'
  },

  output: {
    globalObject: 'this', // Prevents "self is not defined" error message
    library: {
      name: 'calc',
      type: 'umd'
    },
    path: path.resolve(__dirname, 'src/calc/dist')
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
}
