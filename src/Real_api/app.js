'use strict'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan')
const FileStreamRotator = require('file-stream-rotator');

const app = express();


app.use('/Todoapi', require('./routes/index'))

// catch 404 and forward to error handler

module.exports = app
