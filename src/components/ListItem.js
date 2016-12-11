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
 export const Todo = ({
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
    { text }
  </li>
           )

 Todo.propTypes = {
   onClick: PropTypes.func,
   text: PropTypes.string,
   completed: PropTypes.bool,
 }
