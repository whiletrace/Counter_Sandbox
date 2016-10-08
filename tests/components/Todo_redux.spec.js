import deepfreeze from 'deep-freeze'
import todosReducer  from '../../src/redux/Todo_redux'

describe('todosReducer', function() {
 it('should deep equal stateAfter', function() {
  const stateBefore = []
  const action = {
   type: 'ADD_TODO',
   id: 0,
   text: 'Learn Redux'
  }
  const stateAfter = [
   {
    text: 'Learn Redux',
    id: 0,
    completed: false
   }
  ];
 deepfreeze(stateBefore)
 deepfreeze(action)
 expect(todosReducer(stateBefore, action)).to.eql(stateAfter)
 })
})
describe('toggleTodo',function(){
 it('toggleTodo should deeply equal state after ', function(){
  const stateBefore = [
   {
    
    id: 0,
    text: 'Learn Redux',
    completed: false
   },
   {

    id: 1,
    text: 'go shopping',
    completed: false
   }
  ]
   const action = {
    type: 'TOGGLE_TODO',
    id: 1
  } 
   const stateAfter = [
   {
    id: 0,
    text: 'Learn Redux',
    completed: false
   },
   {
    id: 1,
    text: 'go shopping',
    completed: true
   }
   ]
 deepfreeze(stateBefore)
 deepfreeze(action)
 expect(todosReducer(stateBefore, action)).to.eql(stateAfter)
 })
})