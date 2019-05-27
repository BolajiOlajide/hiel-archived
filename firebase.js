const firebase = require('firebase');

const { firebaseConfig } = require('./config');


firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

module.exports = {
  database
}
