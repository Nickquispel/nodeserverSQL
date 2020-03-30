const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const get = require('./api/get');
// const put = require('./api/put');
const post = require('./api/post');

app.use(bodyParser.json());
app.use('/postselect', get);
// app.use('/put', put);
app.use('/postinsert', post);


/*
app.use((req, res, next) => {
  res.status(200).json({
    message: 'Works'
  });
});*/

module.exports = app;
