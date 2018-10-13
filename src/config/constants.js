require('dotenv').config();

const env = process.env.NODE_ENV;

const defaultConfig = {
  APP_NAME: process.env.APP_NAME || 'Default app',
  PORT: process.env.PORT || 4000
};

const devConfig = {};
const stagingConfig = {};
const prodConfig = {};

module.exports = envConfig(env);
function envConfig(env) {
  switch(env) {
    case 'development':
      return Object.assign(defaultConfig, devConfig);
    case 'staging':
      return Object.assign(defaultConfig, stagingConfig);
    case 'production':
      return Object.assign(defaultConfig, prodConfig);
    default:
      return Object.assign(defaultConfig, prodConfig);
  }
}