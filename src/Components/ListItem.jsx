import React, { PropTypes } from 'react'

// Renders single list item
// style is used as inline style
// style creates a object with a method that
// that uses a ternary operator (?) to evaluate value of completed
// as a boolean balue
// if true style decorates with line-through
// if false no text decoration
const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li // eslint-disable-line jsx-a11y/no-static-element-interactions
    onClick={onClick}
    style={{
      textDecoration:
          completed ?
          'line-through' :
          'none ',
    }}
  >
    { text }
  </li>
    )

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}

// exported to and TodoList.jsx
export default Todo
