// module imports of note are todoApp
// also loadState, and saveState functions
import todoApp from './RootReducer'
import throttle from 'lodash/throttle'
import { createStore } from 'redux'
import { loadState, saveState } from 'localstorage'

// Provides logging of redux store before action is dispatched, dispatched action, and next state
const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch
  if (!console.group) {
    return rawDispatch
  }
  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}
// creates store and implements persistant state within local memory
// uses browser local storage api load state and sets as a constant
// redux store is created with the persistant state const which calls the loadState func
// and the todoApp module imported from the root reducer
// if statement: only log redux store if not producion
// save state fuchtion is called with argument of todos which is an object with a key value pair
// with todos as a key
// value is a method which gets state from the store. of todos defined in Todo_Redux
// then passed to RootReducer
// throttle lets the savestate function only every 1000 miliseconds to not overload memory
// returns store (redux state tree)
const configureStore = () => {
  const persistantState = loadState()
  const store = createStore(
    todoApp,
    persistantState
  )
  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    })
  }, 1000))

  return store
}
// exported to src/index
export default configureStore
