// importing neccessary node modules
// and combine Reducers
import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

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

// reducer state and action as arguments
// for case of 'Add_TODO'
// returns an array with state object and the unique id passed by the action creator
// defaults to passing state
// returns as state

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
})
// function takes state as argument
// maps state from allIds and calls a function on each createing a new array
// containing the objects state objects returned by the byId reducer each with unique id passed
// by the action creator


// using a built in redux function called combine reducers
// combines the reducers byId, and allIds to one reducer named todos
const todos = combineReducers({
  byId,
  listByFilter,
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
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

// exported to RootReducer
export default todos
