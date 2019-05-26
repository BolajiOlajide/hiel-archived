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

export const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL: databaseUrl,
  projectId,
  storageBucket,
  messagingSenderId: messageId,
  appId
};
