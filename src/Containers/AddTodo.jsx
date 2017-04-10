// module imports
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../Actions/actions'

// addTodo logic the adding todo by creating a
// input field and button
// button has a onClick event listener
// if add button is clicked
// action is dispatches addTodo function as input.value
// store is subscribed via the connect function from react-redux

let AddTodo = ({ dispatch }) => { // eslint-disable-line import/no-mutable-exports
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
  dispatch: PropTypes.func.isRequired,
}
// creates new AddTodo that is connected redux store
AddTodo = connect()(AddTodo)

// exported to Components/App.jsx
export default AddTodo
