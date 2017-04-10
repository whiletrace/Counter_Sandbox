
import React, { PropTypes } from 'react'
import Todo from './ListItem'

// presentational component
// renders an unordered list containing the todos
// maps each todos to the component Todo which is child of TodoList
// props passed to component are todos and onTodoClick
// event listener onClick executes onTodoClick
const TodoList = ({
  todos,
  onTodoClick,
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />,
     )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.string,
      text: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

// exports to Containers/VisibleTodList.jsx
export default TodoList
