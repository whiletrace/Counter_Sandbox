'use strict'

const util = require('util')
const sqlite3 = require('sqlite3')
const log = require('debug')('todo:sqlite3-model')
const error require('debug')('todo:error')

const Todo = // this will be the server entry point? for routes etc 

// database connection 
let db 

exports.connectDB = function() {
	return new Promise((resolve, reject)=> {
		if (db)  return resolve(db)
	  var dbfile = process.env.SQLITE_FILE ||"todo.sqlite3" 
      db = new sqlite3(dbfile,
      	sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      	err => {
      		if (err) reject(err)
      		else {
      			log(' Opened SQLite3 database '+ dbfile);
            }
        })
    })
}