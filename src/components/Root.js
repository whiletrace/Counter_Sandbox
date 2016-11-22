import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import TodoApp from './App'

const Root = ({ store }) => (
     <Provider store = { store }>
     <TodoApp />
    </Provider>
	)
Root.propTypes = {
  store: PropTypes.object,
}
export default Root
