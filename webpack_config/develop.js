const {Config} = require('webpack-config');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new Config()
.extend(`${__dirname}/base.js`)
.merge({
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
});