// module imports of note is Provider from react-redux library
import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import TodoApp from '../Components/App'

// react router with react-redux provider implementation
// Browser history prop generates url
// router is source for filter passed by params
// Route path denotes to match url depending what filter is selected
// visible todos are now handled via the router via params in route config
// Provider provides global access to data from store to all child components via context
// react redux does this under the hood

const Root = ({ store }) => (
  <Provider store={store} >
    <Router history={browserHistory} >
      <Route path="/(:filter)" component={TodoApp} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.shape({
  }).isRequired,
}

// exported to index.jsx
export default Root
