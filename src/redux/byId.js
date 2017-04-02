// new implemetation for normalizing response shape
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos,
    }
  }
  return state
}

export default byId
export const getTodo = (state, id) => state[id]

// old implentation before normalizing the response shape
/* const byId = (state = {}, action) => {
  if(action.response) {

  }
  switch (action.type) {
    case 'FETCH_TODOS_SUCCESS': // eslint-disable-line no-case-declarations
      const nextState = { ...state }
      action.response.forEach((todo) => {
        nextState[todo.id] = todo
      })
      return nextState
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        [action.response.id]: action.response,
      }
    default:
      return state
  }
}

*/
