'use strict'
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var fs = require('fs')
var morgan = require('morgan')
var logger = require('./logger')
var error = require('debug')('Real-api:error')
var debug = require('debug')('Real_api:app')
const app = express();

//logging middleware

app.use(morgan(process.env.REQUEST_LOG_FORMAT || 'common', { stream: logger.stream}
))

// mainroute
app.use('/Todoapi', require('./routes/index'))

// server error handler
app.use(function (err, req, res, next) {
  logger.error((err.stack))
  res.status(500).message('Something broke!')
})
 
//uncaught exception handling
process.on("uncaughtException", function(err){
  if(!error.isOperational) { 
   logger.error("uncaught exception @ " + (err.stack || err))
  }
  
})

debug(module.exports = app)
