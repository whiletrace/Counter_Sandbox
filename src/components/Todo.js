// this is a bandaged together example of using react
// and redux together and will be refactored
// using a new git branch
// however since the application is working
// I thought that this would be a good time to
// save this as master create a development branch
// from this version of the app

// imports
import { store } from 'redux/Todo_redux'
import React from 'react'
import ReactDOM from 'react-dom'
// a variable that is called to set the index key for each new todo
let nextTodoId = 0
// a functional component that takes filter prop which is a string
// Children which is the contents of the link
// passing currentFilter as a prop
const FilterLink = ({
  currentFilter,
  filter,
  children,
// when rendered returns the links for each filter behavior
}) => {
// if filter equals current Filter returns span instead of link
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
// an anchor tag that has no destination
    <a href= "#"
// onClick prevents default behavior
// dispatches an action from the store when the links are clicked
// in this case the action with type SET_VISIBLITY_FILTER and
// passes in the filter prop which tells the reducer which filter is clicked
// children is passed down we can modify text
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
//  this function sets behavior for the filter links using a switch statement
// case todos and filter are arguments
const getVisibleTodos = (todos, filter) => {
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
// this is the main react component using es6 class syntax
class TodoApp extends React.Component {
  render() {
// destructuring todos and visibilityFilter from the props
// so can access them directly without this.props
    const {
      todos,
      visibilityFilter,
    } = this.props

// this is the function call to filter todos before rendering with todos
// and visibilityFilter from the props
    const VisibleTodos = getVisibleTodos(
      todos,
      visibilityFilter
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
{/* mapping VisibleTodos which creates
a new array after the function has been called upon each todo
 the function  gives each new todo a key as per the action */ }
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
{ /* A paragraph element is created using the filterlink component
the filter props are given values here with three choices
SHOW_ALL SHOW_ACTIVE SHOW_COMPLETED
passing  currentFilter so each will know which filter is being executed
and apply the correct styling to it*/}
        Show:
        {' '}
        <FilterLink
          filter = "SHOW_ALL"
          currentFilter = {visibilityFilter}
        >
         All
         </FilterLink>
         {' '}
        <FilterLink
          filter = "SHOW_ACTIVE"
          currentFilte r= {visibilityFilter}
        >
         Active
         </FilterLink>
          {' '}
        <FilterLink
          filter = "SHOW_COMPLETED"
          currentFilter = {visibilityFilter}
        >
         completed
         </FilterLink>
         </p>
        </div>
      )
  }
}
// renders changes to the DOM
// spread over the state field so all the state is passed as a prop
// to the TodoApp component
const render = () => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
    />,
    document.getElementById('root')
    )
}
// subscribing the redux store to the render constant
// allows the store manage state through various
// dispatching actions from the the reducer at various
// instances in the react component
store.subscribe(render)
render()
