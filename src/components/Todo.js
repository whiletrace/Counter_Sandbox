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
const Link = ({
  active,
  children,
  onClick,
// when rendered returns the links for each filter behavior
}) => {
// if filter equals current Filter returns span instead of link
  if (active) {
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
        onClick()
      }}
    >
    {children}
    </a>
    )
}
class FilterLink extends React.Component { 
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
       this.forceUpdate()
      )
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  render(){
    const props = this.props
    const state = store.getState()
    return(
      <Link
       active = {
        props.filter === 
        state.visibilityFilter
       }
       onClick={() =>
        store.dispatch({
          type: 'SET_VISIBLITY_FILTER',
          filter: props.filter,
        })
       }
      >
      {props.children}
      </Link>
      )
  }
}
// this is the first in refactor extracting a todo component which will render a single list item
// it will be a function
const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li
    onClick= {onClick}
    style = {{
      textDecoration:
          completed ?
          'line-through' :
          'none ',
    }}
  >
    {text}
  </li>
           )
const TodoList = ({
  todos,
  onTodoClick,
}) => (
   <ul>
   {todos.map(todo =>
    <Todo
      key ={todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id)}
    />
     )}
   </ul>
)
const AddTodo = ({
  onAddClick,
}) => {
  let input
  return (
  <div>
    <input ref = {node => {
      input = node
    }}
    />
        <button onClick = {() => {
          onAddClick(input.value)
          input.value = ''
        }}
        >
        Add Todo
        </button>
  </div>
  )
}
const Footer = () => (
  <p>
{ /* A paragraph element is created using the filterlink component
the filter props are given values here with three choices
SHOW_ALL SHOW_ACTIVE SHOW_COMPLETED
passing  currentFilter so each will know which filter is being executed
and apply the correct styling to it*/ }
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
          filter = "SHOW_COMPLETED"
          
        >
         completed
         </FilterLink>
         </p>)
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
const TodoApp = ({
  todos,
  visibilityFilter,
}) => (
   <div>
    <AddTodo
      onAddClick= {text =>
       store.dispatch({
         type: 'ADD_TODO',
         id: nextTodoId++,
         text,
       })
    }
    />
    <TodoList
      todos = {
        getVisibleTodos(
  todos,
  visibilityFilter
  )
      }
      onTodoClick ={id =>
      store.dispatch({
        type: 'TOGGLE_TODO',
        id,
      })
    }
    />

    <Footer/>
    </div>
  )
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
// allows the store manage state through by
// dispatching actions from the the reducer at various
// instances in the react component
store.subscribe(render)
render()
