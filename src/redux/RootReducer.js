import { combineReducers } from 'redux'
import todos, * as fromTodos from './Todo_redux'
// using a built in redux function called combine reducers
// create a reducer (todoApp) bycombineing the reducers todos
const todoApp = combineReducers({
  todos,
})

export default todoApp

export const getVisibleTodos = (state, filter) =>
fromTodos.getVisibleTodos(state.todos, filter)

// the combined reducers are exported to module Configurestore
