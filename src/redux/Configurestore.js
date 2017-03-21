// module imports of note are todoApp
// also loadState, and saveState functions
import { createStore } from 'redux'
import todoApp from './RootReducer'
// import throttle from 'lodash/throttle'
// import { loadState, saveState } from 'localstorage'

// Provides logging of redux store before action is dispatched, dispatched action, and next state
const logging = store => (loggingDispatch) => {
  if (!console.group) { // eslint-disable-line no-console
    return loggingDispatch
  }
  return (action) => {
    console.group(action.type) // eslint-disable-line no-console
    console.log('%c prev state', 'color: gray', store.getState()) // eslint-disable-line no-console
    console.log('%c action', 'color: blue', action) // eslint-disable-line no-console
    const returnValue = loggingDispatch(action) // eslint-disable-line no-console
    console.log('%c next state', 'color: green', store.getState()) // eslint-disable-line no-console
    console.groupEnd(action.type) // eslint-disable-line no-console
    return returnValue
  }
}

const promise = store => nextDispatch => (action) => { // eslint-disable-line no-unused-vars
  if (typeof action.then === 'function') {
    return action.then(nextDispatch)
  }
  return nextDispatch(action)
}


const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
     (store.dispatch = middleware(store)(store.dispatch)), // eslint-disable-line no-param-reassign
    )
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
// commenting out all code dealing with persistant local state because starting to work
// async data and will be setting up a fake backend however want to keep the patterns for reference
// const persistantState = loadState()
  const store = createStore(todoApp)

  const middlewares = [promise]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logging)
  }
  wrapDispatchWithMiddlewares(store, middlewares)
  return store
}

// exported to src/index
export default configureStore
