// imports from the form component and the list component
import { store } from 'redux/Todo_redux'
import React from 'react'
import ReactDOM from 'react-dom'
// This es6 syntax to initiate a Todo cla
  // set state of component
  // action handlers
  // render method
    // pass in properties to children
let nextTodoId = 0
class TodoApp extends React.Component {
  render() {
    return (
        <div>
        <input ref = {node => {
          this.input = node
        }}
        />
        <button onClick = {() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            Id: nextTodoId ++,
          })
          this.input.value = ''
        }}
        >
        Add Todo
        </button>
        <ul>
         {this.props.todos.map(todo =>
          <li key = {todo.id}
          onClick= {() => {
            store.dispatch({
            type: 'TOGGLE_TODO',
            id: todo.Id,
          })
        }} 
         style = {{textDecoration:
          todo.completed ?
          'line-through':
          'none '
        }}>
           {todo.text}
           </li>
           )}
        </ul>
        </div>
        )
  }
}
const render = () => {
  ReactDOM.render(
    <TodoApp
      todos ={store.getState().todos}
    />,
    document.getElementById('root')
    )
}
store.subscribe(render)
render()
