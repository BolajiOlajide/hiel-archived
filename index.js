const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const config = require('lazy-config');
const logger = require('winston');

const Ctrl = require('./controller');


const app = express();

app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/assets'));

app.get('/', Ctrl.displayHomepage);


app.listen(config.app.port, () => {
  logger.info('Hiel is running. To terminate press Ctrl + C.');
});
