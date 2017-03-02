 // module imports
 import React, { PropTypes } from 'react'

 // Presentational component
 // Renders single list item
 // takes onClick completed and text as props
 // style is used as inline style
 // style creates a object with a method that
 // that uses a ternary operator (?) to evaluate value of completed
 // as true or false
 // if true style decorates with line-through
 // if false no text decoration
 const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li
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
 export default Todo
