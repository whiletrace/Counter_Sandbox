// module imports
import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../Containers/VisibleTodoList'
import AddTodo from '../Containers/AddTodo'

// TodoApp is now a presentational component(stateless) that renders its child components
// AddTodo(container component)
// VisibleTodoList(container component)
// Footer which is a presentational component
// It is a stateless pure function or dumb component
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  )

// module exported to Root.js
export default TodoApp
