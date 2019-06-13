const { CronJob } = require('cron');
const config = require('lazy-config');

const worker = require('./worker');


const { cron } = config;

const postStandupJob = new CronJob(
  cron.definition,
  async () => worker.runStandup(),
  null,
  true,
  'Africa/Lagos'
);

postStandupJob.start();
