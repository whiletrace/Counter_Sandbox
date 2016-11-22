import React from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
// it will be a function

const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
})

let AddTodo = ({ dispatch }) => {
  let input
  return (
  <div>
    <input ref = {node => {
      input = node
    }}
    />
        <button onClick = {() => {
          dispatch(addTodo(input.value))
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
