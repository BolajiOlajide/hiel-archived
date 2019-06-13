const { database } = require('../firebase');

module.exports = {
  index(req, res) {
    return res.send('Working!');
  },
  async displayAdminPage(req, res) {
    const snapshot = await database.ref('members').once('value');
    const response = snapshot.val() || {};
    const context = {
      members: Object.values(response)
    };
    return res.render('admin', context);
  }
};
