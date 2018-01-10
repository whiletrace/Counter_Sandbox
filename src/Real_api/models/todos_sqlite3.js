var sqlite3 = require('sqlite3').verbose()
var util= require('util')
var logger = require('../logger')
var debug = require('debug')('Real_api:todos_sqlite3')
var error = require('debug')('todos:error')

const Todo = require('./todo')


var db;  // database is stored here

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

exports.connectDB = function() {  
  return new Promise((resolve, reject) => {
     var dbfile ='./src/Real_api/data/Tododb.sqlite3'
      db = new sqlite3.Database(dbfile, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    if(db) {
    	resolve(logger.info('db was created and is open at' + dbfile))

    } else {
    	reject(error)
    }
  })
}

// database connection and query test
exports.testWrite = function () {
 return exports.connectDB().then(function(){
   db.all('SELECT * FROM todos', function (error, rows) {
    if (error) {
        logger.error(error);
    } else {
        rows.forEach(function (row) {
            logger.info(row);
        });
      }
   });
   db.close()
 })
}

exports.testWrite()

// create 
exports.create = function(id, body, completed){
  return exports.connectDB().then(function(){
    var todo = new Todo(id, body, completed);
    return new Promise((resolve, reject) => {
      db.run('INSERT INTO todos(id, body, completed) VALUES(?,?,?)',[id, body, completed],function(error){
        if (error) {
          reject(error)
        } else {
          logger.info('Create' + util.inspect(todo))
          resolve(todo)
        }
      })
    })
  })
}

exports.read = function(id, body, completed){
  return exports.connectDB().then(function(){
    var todo = new Todo(id, body, completed);
    return new Promise((resolve,reject) => {
      db.each('SELECT')
    })
  })
}

