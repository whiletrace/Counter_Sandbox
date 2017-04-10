
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import todoApp from './RootReducer'

// Thunk middleware can import from redux-thunk but will keep this for reference of pattern
// curried function that allows redux to recognize and dispatch functions as actions
const thunk = store => next => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

// wraps redux store in middlewares Thunk and redux-logger(if it is not a production env)
// Redux Devtools Chrome extension
// creates and reurns the redux store
const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line no-underscore-dangle
  const store = createStore(
    todoApp,
    composeEnhancers(
    applyMiddleware(...middlewares),
    ),
  )

  return store
}

// exported to src/index
export default configureStore
