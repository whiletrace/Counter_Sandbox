// module imports of note are todoApp
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise'
import todoApp from './RootReducer'

const configureStore = () => {
  const middlewares = [promise]
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
