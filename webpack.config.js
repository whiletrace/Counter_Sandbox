var path = require('path');

module.exports = {
  eslint: {
    configFile: '.eslintrc'
  },
  entry: [
    './src/index'
  ],
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./src')]
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    contentBase: './dist'
  }
}