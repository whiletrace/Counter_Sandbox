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
}
  render() {
    return (<div className = "container">
   <div className ="row">
    <h1>Todo</h1>
    <Input />
   </div>
   <div className ="row">
    <List />
   </div>
  </div>)
  }
}
