import { PropTypes } from 'react'
import React from 'react'
export default class Input extends React.Component { constructor() {
  super()
  this.state = { value: '' }
}
  render() {
    return (
	<div className= "Input">
	<input type="text" value="Hello!" />
	</div>
	)
  }
}
