const Logger = require('./logger');
const Cron = require('./cron');


function runStandup() {
  Logger.info('Processing standup for the day!');

  try {
    Cron.runStandup();
    Logger.info('Done processing standup for the day...');

    setTimeout(() => process.exit(0), 5000);
  } catch (error) {
    Logger.error('Ann error occured', error.message);
    setTimeout(() => process.exit(0), 5000);
  }
}

const action = process.argv[2];

switch (action) {
  case 'runStandup': runStandup();
    break;

  default:
    Logger.error('Invalid scheduled action specified');
}
