
import React from 'react'
import CounterButton from './CounterButton'
export default class Main extends React.Component { constructor() {
  super()
  this.handleClick = this.handleClick.bind(this)
  this.state = { counter: 0 }
}
  handleClick(Value) {
    this.setState({ counter: this.state.counter + Value })
  }
  render() {
    return (<div className="container text-center"> <div className="row">
Hello! The value is {this.state.counter} </div>
<div className="row">
<CounterButton onIncrement={this.handleClick} />
<CounterButton text={`Add ${this.state.counter}`}
  incrementValue={this.state.counter}
  onIncrement={this.handleClick}
  extraText={'Hello'}
/>
</div>
<div className="row">
  <CounterButton text={'subtract 1'} incrementValue={-1} onIncrement={this.handleClick} />
  <CounterButton text={'halve'} incrementValue={ this.state.counter / 2 * -1 }
    onIncrement={this.handleClick}
  />
</div>
</div>)
  }
}
