
const log  = require('debug')('Real_api:todo');
const error = require('debug')('Real_api:error')
var todos = require('../models/todos_sqlite3')
var logger = require('../logger')
module.exports = require('express').Router()

.get('/', (req, res)=> res.send({ok:'so this route is working'}
))

// Read Note (read)
.get('/view', (req, res) => todos.read().then(function(result) {
  res.send(result)
}, function(err){
	logger.error('could not get the response from ', err.stack)
}))
