// imports from the form component and the list component
import React from 'react'
import Input from './Form'
import List from './List'
// This es6 syntax to initiate a Todo cla
  // set state of component
  // action handlers
  // render method
    // pass in properties to children
export default class Todo extends React.Component { constructor() {
  super()
  this.state = { List: [] }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
}
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit() {
    // const allTodo = this.state.List.concat([newItem]);
    const Newitem = this.state.value
    const Newarray = [...this.state.List, Newitem]
    this.setState({ List: Newarray })
  }
  render() {
    return (<div className = "container">
     <div className = "row">
        <h1>Todo</h1>
    <Input addbutton ={this.handleSubmit} value= {this.state.value}
      handleChange ={this.handleChange}
    />
   </div>
   <div className ="row">
    <List />
   </div>
  </div>)
  }
}
