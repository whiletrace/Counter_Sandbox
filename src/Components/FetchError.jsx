import React, { PropTypes } from 'react'

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

export default FetchError
