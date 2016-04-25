import { PropTypes } from 'react'
import React from 'react'
export default function CounterButton(props) {
  const increment = () => {
    props.onIncrement(props.incrementValue)
  }
  return (
<button onClick={ increment } className="btn btn-primary">{props.text} {props.extraText}</button>
)
}
CounterButton.defaultProps = { incrementValue: 1, text: 'Increment' }
CounterButton.propTypes = {
  incrementValue: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  text: PropTypes.string,
  extraText: PropTypes.string,
}

