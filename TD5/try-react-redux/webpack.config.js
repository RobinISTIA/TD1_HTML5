const path = require('path')
const absolute = relative => path.join(__dirname, relative)

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader/webpack!babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },


  output: {
    path: absolute('./dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './dist',
    hot: true
  }
}
