// importing neccessary node modules
// and combine Reducers
import { combineReducers } from 'redux'
import singleTodo from './singleTodo_reduce'
// this reducer was extracted from original reducer renamed todos
// in doing so began implementing reducer compositional pattern
// takes state and action as arguments governs individual todos

// switch statement which takes the type property of the action object as a argument
// case for type property ADD_TODO
// returns an object with keys of id, text, and completed
// with values corresponding to the relevant action object
// for the case of TOGGLE_TODO
// if the key id of the action object does not match the
// key in the state object
// it will return the state object
// if the action object id being evaluated and the state object id
// will return the opposite value of the completed key of the state object


const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: singleTodo(state[action.id], action),
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}
const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id])


const todos = combineReducers({
  byId,
  allIds,
})


 /*
 const visibilityFilter = (
  state = 'SHOW_ALL',
  action
  ) => {
  switch (action.type) {
    case 'SET_VISIBLITY_FILTER':
      return action.filter
    default: return state
  }
}
*/

/*
// this is original reducer that todo was extracted from
// takes state which is an empty array and action as arguments
const todos = (state = [], action) => {
  switch (action.type) {
// in case of type ADD_TODO
    case 'ADD_TODO':
// returns an array using the spread operator to concatenate
// state and a function call to the todo reducer to populate the array
      return [
        ...state,
// a function call to the todo reducer
        todo(undefined, action),
      ]
// in the case of type TOGGLE_TODO of action object
    case 'TOGGLE_TODO':
// returns a  new array using the mapping method on the state
// array which calls the todo reducer on each index of the
// state array
      return state.map(t => singleTodo(t, action))
    default:
      return state
  }
}
*/
// using a built in redux function called combine reducers
// combines the reducers todos, and visibility to one reducer named TodoApp


// creates the redux store which is exported
// export of the todos reducer
// which is used in my testing module Todo_redux.spec.js
export default todos

// this is a selector function it prepares data to be
// to be rendered by the ui

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
// switch using the filter  as an argument
  switch (filter) {
// in the case of SHOW_ALL
    case 'all':
// returns all the todos
      return allTodos
// for the case SHOW_COMPLETED
    case 'completed':
// will return the todos that have the key completed with the value true
      return allTodos.filter(
      t => t.completed)
// In the case show active will show the todos
// with the key completed with the value false
    case 'active':
      return allTodos.filter(
        t => !t.completed)
    default:
      throw new Error('Unknown filter: ${filter}.')
  }
}
