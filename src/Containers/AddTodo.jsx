// module imports
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions/actions'

// addTodo controls the adding todo by creating a
// input field
// a button
// button has a onClick event listener

// if add button is clicked
// action is dispatches addTodo function as input.value
// store is subscribed via the connect function from react-redux

let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <input
        ref={(node) => {
          input = node
        }}
      />
      <button
        onClick={() => {
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
  dispatch: React.PropTypes.func.isRequired,
}

AddTodo = connect()(AddTodo)
export default AddTodo
