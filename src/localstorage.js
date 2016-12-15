// function that load state to persistant memory
// try and catch pattern
// const serialized state uses method getItem which is the application state
// if state is null returns undefined
// if not null returns a json object serializedState
// if error catch statement returns undefined
// exports to Configurestore module

// not using this module anymore however I will keep it around 
// for reference 
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
// function that saves state changesto local storage
// stringifes json object which is state sets
// sets arguments state, serialized state to localStorage via setItem Method of localStorage api
// exports to Configurstore module
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // ignore writeing errors
  }
}
