//  this function sets behavior for the filter links using a switch statement
// case todos and filter are arguments
 export const getVisibleTodos = (todos, filter) => {
// switch using the filter  as an argument
   switch (filter) {
// in the case of SHOW_ALL
     case 'SHOW_ALL':
// returns all the todos
       return todos
// for the case SHOW_COMPLETED
     case 'SHOW_COMPLETED':
// will return the todos that have the key completed with the value true
       return todos.filter(
        t => t.completed)
// In the case show active will show the todos
// with the key completed with the value false
     case 'SHOW_ACTIVE':
       return todos.filter(
        t => !t.completed)
     default:
       return todos
   }
 }
