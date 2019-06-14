const firebase = require('./firebase');

firebase.database.ref('members').push({
  name: 'Bolaji',
  slackId: 'U2CQEHW3S',
  displayName: 'cooproton',
  isActive: true
}).then(() => console.log('Done'));

firebase.database.ref('members').push({
  name: 'Delores',
  slackId: 'U7Q2YUEVA',
  displayName: 'Delores Diei',
  isActive: false
}).then(() => console.log('Done'));

firebase.database.ref('members').push({
  name: 'Hiel',
  slackId: '0000',
  displayName: 'hiel',
  isActive: false
}).then(() => console.log('Done'));

firebase.database.ref('members').push({
  name: 'Saheed',
  slackId: 'UKJ1Z1JBX',
  displayName: 'Saheed',
  isActive: true
}).then(() => console.log('Done'));
