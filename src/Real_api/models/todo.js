'use strict'
 
const util = require('util');
const log  = require('debug')('Real_api:todo');
const error = require('debug')('Real_api:error')

module.exports= class Todo {
	constructor(id, body, completed){
	this.id = id,
	this.body = body,
	this.completed = completed
	}
	get JSON() {
        return JSON.stringify({
            id: this.id, body: this.body, completed: this.completed
        })
    }
    static fromJSON(json) {
        var data = JSON.parse(json);
        var Todo = new Todo(data.id, data.body, data.completed);
        log(json +' => '+ util.inspect(todo));
        return todo;
    }
}
