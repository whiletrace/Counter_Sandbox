// v4 creates individual id keys for each todo
 import { v4 } from 'uuid'
 import * as api from '../Api/index'
// setvisi

/* export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBLITY_FILTER',
  filter,
})
*/

// The actions that are being dispatched
// v4 is implemented by addTodo action to inject unique ids for each todo
// addTodo is dispatched by AddTodo container module
 export const addTodo = text => ({
   type: 'ADD_TODO',
   id: v4(),
   text,
 })

 export const requestTodos = filter => ({
   type: 'REQUEST_TODOS',
   filter,
 })

// RecieveTodos action is called by fetchTodos
 const receiveTodos = (filter, response) => ({
   type: 'RECEIVE_TODOS',
   response,
   filter,
 })

// Asnchronous action creator
// resolves promise from api to the action object
 export const fetchTodos = filter =>
   api.fetchTodos(filter).then(response =>
   receiveTodos(filter, response),
 )

// toggleTodo action is dispached by VisibleTodoList container module
 export const toggleTodo = id => ({
   type: 'TOGGLE_TODO',
   id,
 })

