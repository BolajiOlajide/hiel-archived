const { WebClient, LogLevel } = require('@slack/web-api');
const axios = require('axios');
const config = require('lazy-config');

const { morningMessage, standUpMessage } = require('./utils/message');
const { database } = require('./firebase');


// Read a token from the environment variables
const { token, webhookUrl } = config.slack;

// Initialize
const slackWebClient = new WebClient(token, {
  logLevel: LogLevel.DEBUG,
});

const Cron = {
  sendMessage(memberInfo = {}) {
    const text = standUpMessage(memberInfo.name);
    const body = {
      channel: memberInfo.slackId,
      text,
      as_user: true
    }
    return slackWebClient.chat.postMessage(body);
  },

  async sendStandupNotifications() {
    const snapshot = await database.ref('members').once('value');
    const membersList = Object.values(snapshot.val()).filter(member => (member.isActive === true));
    const pendingPromises = []

    for (let index = 0; index < membersList.length; index += 1) {
      pendingPromises.push(this.sendMessage(membersList[index]));
    }

    await Promise.all(pendingPromises);
  },

  async postMorningMessage() {
    const data = JSON.stringify({ text: morningMessage });
    const res = await axios.post(webhookUrl, data);
    console.log(res.data);
  },

  saveDayMsg() {
    return database.ref('messages').push({ messageId });
  }
};

module.exports = Cron;
