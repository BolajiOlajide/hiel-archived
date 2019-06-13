const firebase = require('firebase');

const config = require('./config');


firebase.initializeApp(config.firebase);

// Get a reference to the database service
const database = firebase.database();

module.exports = {
  database
}
