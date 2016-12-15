import { v4 } from 'node-uuid'

// simulated api to demonstrate how asychranous fetching from a real backend
///function that 
// creates a promise that takes a argument 
//creates a fakeDatabase with a list todos 
const fakeDatabase = {
  todos: [{
   id: v4(),
   text: 'go shopping',
   completed: true,
  }, {
   id: v4(),
   text: 'hug a kitten',
   completed: false,
  },{
   id: v4(),
   text: 'kiss a puppy',
   completed: true,
  }]
}
const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });