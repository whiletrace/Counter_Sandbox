// this is a bandaged together example of using react
// and redux together and will be refactored
// using a new git branch
// however since the application is working
// I thought that this would be a good time to
// save this as master create a development branch
// from this version of the app

// imports
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todoApp } from 'redux/Todo_redux'
import React from 'react'
import ReactDOM from 'react-dom'
import VisibleTodoList from 'containers/VisibleTodoList'
import AddTodo from 'containers/AddTodo'
import { Footer } from './Footer'
import { loadState, saveState } from 'localstorage'
import throttle from 'lodash/throttle'
// a variable that is called to set the index key for each new todo

// a functional component that takes filter prop which is a string
// Children which is the contents of the link
// passing currentFilter as a prop


// this is the first in refactor extracting a todo component which will render a single list item
// it will be a function

// this is the main react component using es6 class syntax
const TodoApp = () => (
   <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    </div>
  )
// renders changes to the DOM
// spread over the state field so all the state is passed as a prop
// to the TodoApp component
const persistantState = loadState()
const store = createStore(
  todoApp,
  persistantState
  )
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  })
}, 1000))
ReactDOM.render(
    <Provider store = { store }>
     <TodoApp />
    </Provider>,
    document.getElementById('root')
    )
// subscribing the redux store to the render constant
// allows the store manage state through by
// dispatching actions from the the reducer at various
// instances in the react component

