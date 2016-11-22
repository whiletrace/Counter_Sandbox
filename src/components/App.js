import VisibleTodoList from 'containers/VisibleTodoList'
import AddTodo from 'containers/AddTodo'
import { Footer } from './Footer'
import React from 'react'

const TodoApp = () => (
   <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    </div>
  )

export default TodoApp
