const {Config,environment} = require('webpack-config');

environment.setAll({
  ENV: () => process.env.NODE_ENV || 'dev'
});


module.exports = new Config()
  .extend(`${__dirname}/[ENV].js`);