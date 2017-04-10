
import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../Containers/VisibleTodoList'
import AddTodo from '../Containers/AddTodo'

// TodoApp is now a presentational component(stateless) that renders its child components
const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  )

// module exported to Root.jsx
export default TodoApp
