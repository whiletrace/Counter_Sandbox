// v4 is implemented by addTodo action to inject unique ids for each todo
import { v4 } from 'node-uuid'

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  }, {
    id: v4(),
    text: 'ho',
    completed: true,
  }, {
    id: v4(),
    text: 'let’s go',
    completed: false,
  }],
}

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms))

// returns fake database todos as a promise just like a rest api
// also throws a random error to test api error handleing
export const fetchTodos = filter => // eslint-disable-line import/prefer-default-export
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('This just blew up')
    }
    switch (filter) {
      case 'all':
        return fakeDatabase.todos
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
// allows todos to be added to fake database lookup table
export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    }
    fakeDatabase.todos.push(todo)
    return todo
  })

// allows the todos to be toggled and state updated in fake database
export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id)
    todo.completed = !todo.completed
    return todo
  })

