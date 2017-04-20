const path = require('path');
const webpack = require('webpack');

const config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, '../app/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: [ '.js' ]
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../public'),
    hot: true,
    port: 8080,
    publicPath: '/'
  }
}

module.exports = config;
