const express = require('express');
const debug = require('debug')('indexRouter');

const db = require('../db');

const router = express.Router();
router.get('/', (req, res) => {
  debug(req.body);

  // example usage of db connector
  db.query('SELECT * FROM items', [], (err, resp) => {
    if (err) {
      debug(err);
    }
    debug(resp.rows[0]);
  });

  res.send('hello from root path');
});

module.exports = router;
