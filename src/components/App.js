// module imports
import VisibleTodoList from 'containers/VisibleTodoList'
import AddTodo from 'containers/AddTodo'
import { Footer } from './Footer'
import React from 'react'

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
