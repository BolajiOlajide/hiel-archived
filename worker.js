const Logger = require('./logger');
const Cron = require('./cron');


const runStandup = () => {
  Logger.info('Processing standup for the day!');

  try {
    Cron.postMorningMessage();
    // Cron.sendStandupNotifications();
    Logger.info('Done processing standup for the day...');

    setTimeout(() => process.exit(0), 10000);
  } catch (error) {
    Logger.error('An error occured', error.message);
    setTimeout(() => process.exit(0), 5000);
  }
}

exports.runStandup = runStandup;

const action = process.argv[2];

if (action) {
  switch (action) {
    case 'runStandup': runStandup();
      break;

    default:
      Logger.error('Invalid scheduled action specified');
  }
}
