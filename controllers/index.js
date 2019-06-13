module.exports = {
  index(req, res) {
    return res.send('Working!');
  },
  displayAdminPage(req, res) {
    const context = {
      name: 'Bolaji'
    };
    return res.render('admin', context);
  }
};
