import React from 'react'
import { Todo } from './ListItem'
export const TodoList = ({
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
