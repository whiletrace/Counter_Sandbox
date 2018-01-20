
const api = module.exports = require('express').Router()
var models = require('../models/todos_sqlite3')

//  test route Todoapi/heartbeat sends a json to make sure my server is serving 
api.get('/heartbeat', (req, res) => {
	res.json({ message: 'hooray! welcome to our api!' });   
})

//sets server for additional routes in this case /todo 
api.use('/', (req, res, next) => {
    console.log(req.session)
    next()
  })
// this will be the route that handles all true get, post, put and delete request
api.use('/todo', require('./todo'))

