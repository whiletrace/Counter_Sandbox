 // import neccessary modules
 // v4 creates individual id keys for each todo
 import { v4 } from 'uuid'

// setvisi

/* export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBLITY_FILTER',
  filter,
})
*/

// The actions that are being dispatched
// v4 is implemented by addTodo action to inject unique ids for each todo
// addTodo is dispatched by AddTodo container module
 export const addTodo = (text) => ({
   type: 'ADD_TODO',
   id: v4(),
   text,
 })

// toggleTodo action is dispached by VisibleTodoList container module
 export const toggleTodo = (id) => ({
   type: 'TOGGLE_TODO',
   id,
 })
