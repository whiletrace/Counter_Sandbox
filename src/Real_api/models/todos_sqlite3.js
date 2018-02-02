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
exports.create = function create(id, title, completed) {
  return exports.connectDB().then(() => {
    const todo = new Todo(id, title, completed)
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO todos(id, title, completed) VALUES(?,?,?)', [id, title, completed], (err) => {
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

exports.read = function fetch(id, title, completed) {
  return exports.connectDB().then(() => {
    const read = new Promise((resolve, reject) => {
      db.all('SELECT * FROM todos', [id, title, completed], (err, row) => {
        if (err) {
          reject(err)
        } else if (!row) {
          reject(new Error('the database could not get todos'))
        } else {
          const todo = new Todo(row.id, row.title, row.completed)
          const todos = []
          row.map((rows) => {
            todos.push(rows)
            return todos
          })
          resolve(todos)
          logger.info(`READ  ${util.inspect(todo)}`)
        }
      })
    })
    return read
  })
}

exports.update = function change(title, completed, id) {
  const todo = new Todo(id, title, completed)
  return exports.connectDB().then(() => {
    const update = new Promise((resolve, reject) => {
      db.run('UPDATE todos SET title=?, completed=? WHERE id=?', [title, completed, id], (err) => {
        if (err) {
          reject(err)
        } else {
          logger.info(`UPDATE  ${util.inspect(todo)}`)
          resolve(todo)
        }
      })
    })
    return update
  })
}

exports.destroy = function erase(id) {
  return exports.connectDB().then(() => {
    const destroy = new Promise((resolve, reject) => {
      db.run('DELETE from todos WHERE id=?', [id], (err) => {
        if (err) {
          reject(error)
        } else {
          logger.info(`DESTROY ${id}`)
          resolve()
        }
      })
    })
    return destroy
  })
}
