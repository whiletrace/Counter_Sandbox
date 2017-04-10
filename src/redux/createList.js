import { combineReducers } from 'redux'


// Reducers for that handle async logic
const createList = (filter) => {
  const handleToggle = (state, action) => {
    // destructured assignment
    // action.results =
    // {entities:Object, result:"unique id of toggled todo" } from normalized response
    const { result: toggledId, entities } = action.response

    // entities.todos[toggledId] =
    // Object { id:"unique id of toggled todo",text: "string", completed: bool }
    // from normalized response
    const { completed } = entities.todos[toggledId]

    // shouldRemove =
    // bool evaluated based on key: completed, and filter
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    )
    // ternary operater
    // shouldRemove = true
    // method array.prototype.filter()
    // returns array of all ids that are not toggled id
    // shouldRemove = false returns state ie original array
    return shouldRemove ?
      state.filter(id => id !== toggledId) :
      state
  }

  const ids = (state = [], action) => {
    switch (action.type) {
      // if filter equals the action.filter
      // return normalized response {result:[ "unique ids"]}
      // other wise return state array
      case 'FETCH_TODOS_SUCCESS':
        return filter === action.filter ?
          action.response.result :
          state
      // if filter does not equal completed
      // return [state [] and response {result:"unique id"}]
      // other wise return state []
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed' ?
          [...state, action.response.result] :
          state
      default:
        return state
      // See handleToggle function
      case 'TOGGLE_TODO_SUCCESS':
        return handleToggle(state, action)
    }
  }

  //  Reducer for data fetching behavior
  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false
      default:
        return state
    }
  }
  // Reducer for error handleing
  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_TODOS_FAILURE':
        return action.message
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
        return null
      default:
        return state
    }
  }
  // new reducer created from ids, isFetching, Error message
  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  })
}
// exported to ./RootReducer
export default createList

// selectors prepare relavant bits of state to be prepared for use in the ui
// passed as name spaced export fromList to ./RootReducer
// fromList used as methods as methods for selectors in ./RootReducer

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage

