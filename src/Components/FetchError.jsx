import React, { PropTypes } from 'react'

// React component for handleing errors retrieving api data
const FetchError = ({
  message,
  onRetry,
}) => (
  <div>
    <p> Could not fetch the Todos. {message} </p>
    <button onClick={onRetry}> retry </button>
  </div>
)

FetchError.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
}
// component exported to and rendered by VisibleTodolist
export default FetchError
