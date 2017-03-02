// module imports of note is Provider from react-redux library
import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import TodoApp from '../Components/App'
// implentation of react- router and react-redux
// creates  root component
// child of Root is Provider component from react-redux
// Provider provides global access to data from store via context to all its child components
// Provider needs to have childContextTypes specified

// essentially this is for personal understanding only
// react-redux library does this underthehood for us
// so only pattern have to worry about is passing the store
// to Provider via Props from index.js

// longhand Provider Component

 /*
 class Provider extends Component {
  getChildContext() { ... }


  Provider.childContextTypes = {
    store: React.PropTypes.object
  };

  render() { ... }
}
*/

// every component that recieves store from Provider would also have to declare context types
// example passing store to VisibleTodoList component
// VisibleToDoList would have to declare

/*
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
};
*/

// React Router takes path as a prop as well as component{TodoApp}
// Browser history prop generates url
// router is source for filter passed by params
// Route path denotes to match url depending what filter is selected
// Renders TodoApp

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
export default Root
