const dotenv = require('dotenv');
const { getEnvVar } = require('env-utils');


dotenv.config();

const lazyGetEnvVar = (...args) => () => getEnvVar(...args);

module.exports = {
  isDev: () => process.env.NODE_ENV === 'development',
  isStaging: () => process.env.NODE_ENV === 'staging',
  isProd: () => process.env.NODE_ENV === 'production',

  app: {
    port: lazyGetEnvVar('PORT', { devDefault: '4590', optional: true }),
  },
};
