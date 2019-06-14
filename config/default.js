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

  firebase: {
    apiKey: lazyGetEnvVar('FIREBASE_API_KEY'),
    authDomain: lazyGetEnvVar('FIREBASE_AUTH_DOMAIN'),
    databaseUrl: lazyGetEnvVar('FIREBASE_DB_URL'),
    storageBucket: lazyGetEnvVar('FIREBASE_STORAGE_BUCKET'),
    messageId: lazyGetEnvVar('FIREBASE_MESSAGE_ID'),
    projectId: lazyGetEnvVar('FIREBASE_PROJECT_ID'),
    appId: lazyGetEnvVar('FIREBASE_APP_ID')
  },

  slack: {
    token: lazyGetEnvVar('SLACK_TOKEN'),
    aSocialsChannelId: 'CKL4KHQMC',
    webhookUrl: 'https://hooks.slack.com/services/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'
  },

  cron: {
    definition: '0 0 * * 1-5', // every weekday
    // definition: '* * * * *' // every minute
  }
};
