// v4 creates individual id keys for each todo
 import { v4 } from 'uuid'
 import * as api from '../Api/index'
 import { getIsFetching } from '../redux/RootReducer'
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

 // Asnchronous action creator
// resolves promise from api to the action object
// now a function with a callback argument or a thunk
 export const fetchTodos = filter => (dispatch, getState) => {
   if (getIsFetching(getState(), filter)) {
     return Promise.resolve()
   }
   dispatch({
     type: 'FETCH_TODOS_REQUEST',
     filter,
   })

   return api.fetchTodos(filter).then(
     (response) => {
       dispatch({
         type: 'FETCH_TODOS_SUCCESS',
         response,
         filter,
       })
     },
   (error) => {
     dispatch({
       type: 'FETCH_TODOS_FAILURE',
       filter,
       message: error.message || 'something went wrong',
     })
   },
   )
 }


// toggleTodo action is dispached by VisibleTodoList container module
 export const toggleTodo = id => ({
   type: 'TOGGLE_TODO',
   id,
 })

