import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from 'components/Main'
import Todo from 'components/Todo'
import todoApp from 'redux/Todo_redux'
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/Todo" component={Todo} />
    <Route path="/redux/Todo_redux" component={todoApp} />
  </Router>
), document.getElementById('app'))
