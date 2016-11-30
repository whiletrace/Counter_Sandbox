import { combineReducers } from 'redux'
import todos, * as fromTodos from './Todo_redux'
// using a built in redux function called combine reducers
// combines the reducers todos, and visibility to one reducer named todoApp
const todoApp = combineReducers({
  todos,
  // visibilityFilter,
})

export default todoApp

export const getVisibleTodos = (state, filter) =>
fromTodos.getVisibleTodos(state.todos, filter)
