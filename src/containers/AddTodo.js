import React from 'react'
import { connect } from 'react-redux'
let nextTodoId = 0
let AddTodo = ({ dispatch }) => {
  let input
  return (
  <div>
    <input ref = {node => {
      input = node
    }}
    />
        <button onClick = {() => {
          dispatch({
            type: 'ADD_TODO',
            id: nextTodoId++,
            text: input.value,
          })
          input.value = ''
        }}
        >
        Add Todo
        </button>
  </div>
  )
}

AddTodo.propTypes = {
  dispatch: React.PropTypes.func,
}

AddTodo = connect()(AddTodo)
export default AddTodo
