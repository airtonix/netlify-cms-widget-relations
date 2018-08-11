const {Config} = require('webpack-config');
const path = require('path')

module.exports = new Config()
  .merge({
    entry: './dev/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ],
    }
  });