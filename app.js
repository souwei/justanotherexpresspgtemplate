require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

// load middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(morgan('tiny'));

// load routes and start listening
app.use('/', indexRoutes);

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
