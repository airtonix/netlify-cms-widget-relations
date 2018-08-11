const {Config} = require('webpack-config');


module.exports = new Config()
.extend(`${__dirname}/base.js`)
.merge({
  mode: 'production',
  devtool: 'source-map',
});