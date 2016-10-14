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
const FilterLink = ({
  filter,
  children,
}) => {
  return (
    <a href= "#"
      onClick= { e => {
        e.preventDefault()
        store.dispatch({
          type: 'SET_VISIBLITY_FILTER',
          filter,
        })
      }}
    >
    {children}
    </a>
    )
}
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed)
  }
}

class TodoApp extends React.Component {
  render() {
    const VisibleTodos = getVisibleTodos(
      this.props.todos,
      this.props.visibiltyFilter
      )
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
            id: nextTodoId++,
          })
          this.input.value = ''
        }}
        >
        Add Todo
        </button>
        <ul>
         {VisibleTodos.map(todos =>
          <li key = {todos.id}
            onClick= {() => {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: todos.id,
              })
            }}
            style = {{ textDecoration:
          todos.completed ?
          'line-through' :
          'none ',
        }}>
           {todos.text}
           </li>
           )}
        </ul>
        <p>
        Show:
        {' '}
        <FilterLink
          filter = "SHOW_ALL"
        >
         All
         </FilterLink>
         {' '}
        <FilterLink
          filter = "SHOW_ACTIVE"
        >
         Active
         </FilterLink>
          {' '}
        <FilterLink
          filter = "SHOW_ACTIVE"
        >
         completed
         </FilterLink>
         </p>
        </div>
      )
  }
}


const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')
    )
}
store.subscribe(render)
render()
