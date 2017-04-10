// importing neccessary node modules
// and combine Reducers
import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'


// creates a reducer ListByFilter is a {}
// ListbyFilter has keys all: active: completed:
// createlist imported function has filter parameter
// createListfunction becomes a method for each key in {}
// string argument is passed to createList function call
// each string is corresponds to a filter
// and generates a reducer that provides state tree for each filter
const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
})

// combines the reducers byId, and ListByFilter to one reducer named todoApp
const todoApp = combineReducers({
  byId,
  listByFilter,
})

// exported to Configurestore.js
export default todoApp

// these are selector function it prepares data to be rendered by the ui
// uses named space imports from Byid and CreateList as methods
// state refers to the state of TodoApp(combined reducer)
export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) =>
  fromList.getIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  fromList.getErrorMessage(state.listByFilter[filter])

