const express = require('express')
const bodyParser = require('body-parser')
const error = require('debug')('Real_api:error')
const todos = require('../models/todos_sqlite3')
const logger = require('../logger')
const v4 = require('node-uuid')

// const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router()

router.get('/', (req, res) => res.send({ ok: 'so this route is working' }))

// save a todo(create)
router.post('/newTodo', urlencodedParser, (req, res) => todos.create(v4(), req.body.title, req.body.completed).then((err, result) => {
  if (err) {
    res.statusCode = 500
    return res.json(`Failed to create Todo ${err.stack}`)
  }
  res.statusCode = 201
  return res.send(result)
}))

// Read todo (read)
router.get('/view', (req, res) => todos.read().then((result) => {
  res.send(result)
}, (err) => {
  logger.error('could not get the response from ', err.stack)
}))

router.put('/edit', urlencodedParser, (req, res) => todos.update(req.body.title, req.body.completed, req.body.id).then((result) => {
  res.json(result)
}, (err) => {
  logger.error('did not update the todo', err.stack)
}))

router.delete('/delete', urlencodedParser, (req, res) => todos.destroy(req.body.id).then((err, result) => {
  res.send(result)
}, (err) => {
  logger.error('did not destroy the entry', err.stack)
}))

module.exports = router

