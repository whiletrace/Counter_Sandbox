import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import TodoApp from './App'
import { Router, Route, browserHistory } from 'react-router'

const Root = ({ store }) => (
     <Provider store = { store } >
     <Router history = { browserHistory } >
      <Route path = "/(:filter)" component = {TodoApp} />
      </Router>
    </Provider>
	)
Root.propTypes = {
  store: PropTypes.object,
}
export default Root
