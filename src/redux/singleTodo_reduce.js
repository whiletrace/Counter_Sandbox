
// this reducer was extracted from original reducer renamed todos
// in doing so began implementing reducer compositional pattern
// renamed singleTodo and moved to own module
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
// default export as singleTodo
const singleTodo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        completed: !state.completed,
      }
    default:
      return state
  }
}

// exported to Todo_Redux module
export default singleTodo
