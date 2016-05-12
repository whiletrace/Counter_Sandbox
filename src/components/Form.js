import React from 'react'
import List from './List'
export default class Input extends React.Component { constructor() {
  super()
  this.state = { value: '' }
}
  render() {
    return (
     <div className= "Input">
      <input type="text" value ={this.props.value} onChange ={this.props.handleChange} />
      <button className="btn btn-success" onClick={this.props.addbutton}>Add</button>
    </div>
	)
  }
}
