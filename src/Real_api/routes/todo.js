'use strict'
const log  = require('debug')('Real_api:todo');
const error = require('debug')('Real_api:error')

let models = require('../models/todos_sqlite3')
module.exports = require('express').Router()

.get('/', (req, res)=> res.send({ok:'so this route is working'}))

 
 // Read Note (read)
.get('/view', (req, res, next) => {
    models.connectDB(req.query.id)
    .then(todo => {
        res.json('todo', {
            body: todo ? todo.body : "",
            id: req.query.id,
            todo: todo,
            
            
        });
    })
    .catch(err => { next(err); });
});