import { PropTypes } from 'react'
import React from 'react'
export default class Input extends React.Component { constructor() {
  super()
  this.handleChange = this.handleChange.bind(this)
  this.state = { value: '' }
}
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
	<div className= "Input">
     <input type="text"
       value ={this.state.value}
       onChange ={this.handleChange}
     />
    </div>
	)
  }
}
