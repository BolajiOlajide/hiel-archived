const { WebClient, LogLevel } = require('@slack/web-api');
const config = require('lazy-config');

// Read a token from the environment variables
const { token } = config.slack;

// Initialize
const slackWebClient = new WebClient(token, {
  logLevel: LogLevel.DEBUG,
});

const Cron = {
  async runStandup() {
    await slackWebClient.chat.postMessage({
      channel: 'U2CQEHW3S',
      text: 'Hello there!'
    });

    return "DONE!!!!!";
  }
};

Cron.runStandup().then(console.log);
setTimeout(() => process.exit(0), 5000);
module.exports = Cron;
