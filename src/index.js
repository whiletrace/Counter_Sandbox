import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from 'components/Main'
import Error from 'components/Error'
import Todo from 'components/Todo'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="/Error" component={Error} />
    <Route path="/Todo" component={Todo} />
  </Router>
), document.getElementById('app'))
