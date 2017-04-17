const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: [ 'babel-loader', 'eslint-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './build'
  }
}
