// importing neccessary node modules
// and combine Reducers
import { combineReducers } from 'redux'
import singleTodo from './singleTodo_reduce'

// this is original reducer that todo was extracted from

/*
const todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':

      return [
        ...state,

        todo(undefined, action),
      ]

    case 'TOGGLE_TODO':

      return state.map(t => singleTodo(t, action))
    default:
      return state
  }
}
*/

// new implementation

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

// reducer state and action as arguments
// for case of 'Add_TODO'
// returns an array with state object and the unique id passed by the action creator
// defaults to passing state
// returns as state
const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

// function takes state as argument
// maps state from allIds and calls a function on each createing a new array
// containing the objects state objects returned by the byId reducer each with unique id passed
// by the action creator
const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id])

// using a built in redux function called combine reducers
// combines the reducers byId, and allIds to one reducer named todos
const todos = combineReducers({
  byId,
  allIds,
})

// this is a selector function it prepares data to be
// to be rendered by the ui
// switch using the filter  as an argument
// in the case of SHOW_ALL
// returns all the todos
// for the case SHOW_COMPLETED
// for the case SHOW_COMPLETED
// will return the todos that have the key completed with the value true
// In the case show active will show the todos
// with the key completed with the value false
// exported to Module VisibleTodolist
export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
  switch (filter) {
    case 'all':
      return allTodos
    case 'completed':
      return allTodos.filter(
      t => t.completed)
    case 'active':
      return allTodos.filter(
        t => !t.completed)
    default:
      throw new Error('Unknown filter: ${filter}.')
  }
}

// exported to RootReducer
export default todos
