const util = require('util')
const log = require('debug')('Real_api:todo')
const error = require('debug')('Real_api:error')

module.exports = class Todo {
  constructor(id, title, completed) {
    this.id = id
    this.title = title
    this.completed = completed
  }

  get JSON() {
    return JSON.stringify({
      id: this.id, title: this.title, completed: this.completed,
    })
  }
  static fromJSON(json) {
    const data = JSON.parse(json)
    const todo = new Todo(data.id, data.title, data.completed)
    log(`${json}  =>  ${util.inspect(todo)}`)
    return todo
  }
}
