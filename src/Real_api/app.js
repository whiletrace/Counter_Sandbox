
const express = require('express')
const morgan = require('morgan')
const logger = require('./logger')
const error = require('debug')('Real_api:error')
const debug = require('debug')('Real_api:app')

const app = express()

// logging middleware
app.use(morgan(process.env.REQUEST_LOG_FORMAT || 'common', { stream: logger.stream }))

// mainroute
app.use('/Todoapi', require('./routes/index'))

// server error handler
app.use((err, req, res, next) => {
  logger.error(err.stack)
  next()
})

// body parsing middleware

// uncaught exception handling
process.on('uncaughtException', (err) => {
  if (!error.isOperational) {
    debug(logger.error(`uncaught exception @ ${err.stack || err}`))
  }
})

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
  logger.info(`Express server listening on port ${server.address().port}`)
})
