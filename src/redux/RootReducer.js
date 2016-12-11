import { combineReducers } from 'redux'
import todos from './Todo_redux'
// using a built in redux function called combine reducers
// create a reducer (todoApp) bycombineing the reducers todos
const todoApp = combineReducers({
  todos,
})

// the combined reducers are exported to module Configurestore
export default todoApp
