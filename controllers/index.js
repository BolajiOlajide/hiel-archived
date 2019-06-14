const { WebClient } = require('@slack/web-api');
const config = require('lazy-config');

const { database } = require('../firebase');


// Read a token from the environment variables
const { token, aSocialsChannelId } = config.slack;

const slackWebClient = new WebClient(token);

module.exports = {
  index(req, res) {
    return res.send({
      status: 'success',
      text: 'welcome to hiel'
    });
  },

  async displayAdminPage(req, res) {
    const channelList = await slackWebClient.conversations
      .info({ channel: aSocialsChannelId });
    console.log(channelList);
    const snapshot = await database.ref('members').once('value');
    const response = snapshot.val() || {};
    const context = {
      members: Object.values(response)
    };
    return res.render('admin', context);
  },

  async addUser(req, res) {
    return req.body;
  }
};
