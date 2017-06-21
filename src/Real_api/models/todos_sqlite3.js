const sqlite3 = require('sqlite3').verbose()
const util= require('util')
const log = require('debug')('Real_api:todos_sqlite3')
const error = require('debug')('todos:error')

const Todo = require('./todo')


var db;  // database is stored here


// database connection 
exports.connectDB = function() {  
  //if (db)  return resolve(db)
  var dbfile = './src/Real_api/data/Tododb.sqlite3' 
    db = new sqlite3.Database(dbfile);
    db.all("Select * From todos",function(err, rows) {
        console.log(rows);
    });
