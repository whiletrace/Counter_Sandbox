import { createStore } from 'redux'
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
       id: action.id,
       text: action.text,
       completed: action.completed,
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        id: action.id,
        text: action.text,
        completed: !state.completed,
      }
    default:
      return state
  }
}
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todoReducer(undefined, action),
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todoReducer(t, action))
    default:
      return state
  }
}
const store = createStore(todosReducer)
console.log('Initial state:')
console.log(store.getState())
console.log('---------------')
console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux',
})
console.log('Current state:')
console.log(store.getState())
console.log('---------------')
console.log('Dispatching ADD_TODO')
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Learn Redux',
})
console.log('Current state:')
console.log(store.getState())
console.log('---------------')
console.log('Dispatching TOGGLE_TODO')
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0,
})

export default todosReducer
