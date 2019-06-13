const firebase = require('firebase');
const config = require('lazy-config');


const {
  apiKey,
  authDomain,
  databaseUrl,
  storageBucket,
  messageId,
  projectId,
  appId
} = config.firebase;
const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL: databaseUrl,
  projectId,
  storageBucket,
  messagingSenderId: messageId,
  appId
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

module.exports = {
  database
}
