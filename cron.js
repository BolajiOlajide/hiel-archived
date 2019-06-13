const { WebClient, LogLevel } = require('@slack/web-api');
const config = require('lazy-config');

const { morningMessage } = require('./utils/message');


// Read a token from the environment variables
const { token } = config.slack;

// Initialize
// const slackWebClient = new WebClient(token, {
//   logLevel: LogLevel.DEBUG,
// });

const Cron = {
  async sendStandupNotifications() {
    // await slackWebClient.chat.postMessage({
    //   channel: 'U2CQEHW3S',
    //   text: 'Hello there!'
    // });

    return "DONE!!!!!";
  },

  async postMorningMessage() {
    // post message to the group

  }
};

module.exports = Cron;
