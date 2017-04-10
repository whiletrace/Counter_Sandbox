// new implemetation for normalizing response shape
// checks if there is an response object
// if true returns all existing entries
// and all entries contained in entities.todo of the normalized response
// if false will return lookup table as is
const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos,
    }
  }
  return state
}

// exported to redux/RootReducer
export default byId

// Selector gets state shape from byId reducer and prepares it for ui
// exported to redux/RootReducer
export const getTodo = (state, id) => state[id]
