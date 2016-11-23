import { todoApp } from 'redux/Todo_redux'
import throttle from 'lodash/throttle'
import { createStore } from 'redux'
import { loadState, saveState } from 'localstorage'

const configureStore = () => {
  const persistantState = loadState()
  const store = createStore(
    todoApp,
    persistantState
  )
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    })
  }, 1000))

  return store
}

export default configureStore
