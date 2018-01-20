const sqlite3 = require('sqlite3').verbose()
const util = require('util')
const logger = require('../logger')
const debug = require('debug')('Real_api:todos_sqlite3')
const error = require('debug')('todos:error')

const Todo = require('./todo')


let db  // database is stored here

/*
promise pattern for reference

var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (everything turned out fine ) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

 calling a promise

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});

*/
// database connection

exports.connectDB = function start() {
  return new Promise((resolve, reject) => {
    const dbfile = './src/Real_api/data/Tododb.sqlite3'
    db = new sqlite3.Database(dbfile, sqlite3.OPEN_READWRITE || sqlite3.OPEN_CREATE)
    if (db) {
      resolve(logger.info(`db was created and is open at ${dbfile}`))
    } else {
      reject(error)
    }
  })
}

// database connection and query test
exports.testWrite = function test() {
  return exports.connectDB().then(() => {
    db.all('SELECT * FROM todos', (err, rows) => {
      if (err) {
        logger.error(error)
      } else {
        const arrayOfTodo = []
        rows.forEach((row) => {
          arrayOfTodo.push(row)
        })
        logger.info(arrayOfTodo)
      }
    })
    db.close()
  })
}
exports.testWrite()

// create
exports.create = function(id, body, completed) {
  return exports.connectDB().then(() => {
    const todo = new Todo(id, body, completed)
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO todos(id, body, completed) VALUES(?,?,?)', [id, body, completed], (err) => {
        if (err) {
          reject(err)
        } else {
          logger.info(`Create ${util.inspect(todo)}`)
          resolve(todo)
        }
      })
    })
  })
}

exports.read = function(id, body, completed) {
  return exports.connectDB().then(function(){
    return new Promise((resolve,reject) => {
      db.all('SELECT * FROM todos', [id, body, completed], function(err, row){
        if (err) { 
          reject(err)
        } else if(!row) {
          reject(new Error('the database could not get todos' )) 
         } else {
          var todo = new Todo(row.id, row.body, row.completed);
          var todos =[];
           row.forEach(function(row){

            todos.push(row)
            return todos;
            })
          resolve(todos)
          logger.info('READ ' + util.inspect(todos))
          }
        })
      })
    })
}

exports.update = function(id, body, completed) {
  var todo = new Todo(row.id, row.body, row.completed);
  return exports.connectDB().then(function(){
    return new Promise((resolve,reject) => {
      db.run('UPDATE todos'+'SET body=?, SET completed=?'+'WHERE id=?', [body, completed, id], function(err, row){
        if (error) { 
          reject(error)
        } else {
          logger.info('READ' + util.inspect(todo))
          resolve(todo)
        }
      })
    })
  })
}

exports.destroy = function(id, body, completed){
  return exports.connectDB().then(function(){
    return new Promise((resolve,reject) => {
      db.run('DELETE from todos WHERE id=?', [id], function(error){
        if (error) {
          reject(error)
        } else {
          logger.info('DESTROY' + id);
          resolve()
        }
      })
    })
  })
}
