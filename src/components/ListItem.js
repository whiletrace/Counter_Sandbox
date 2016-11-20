 import React from 'react'
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
    {text}
  </li>
           )

 Todo.propTypes = {
   onClick: React.PropTypes.func,
   text: React.PropTypes.string,
   completed: React.PropTypes.bool,
 }
