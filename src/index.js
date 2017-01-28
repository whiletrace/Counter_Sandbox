// module imports of note is configureStore and Root
import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from 'redux/Configurestore'
import { fetchTodos } from './Api'

// Configurestore (which is the entirety of my redux store) is passed to const store
// Root component which is entirety of react application is rendered with store passed
// top leval component all props from store to Provider and all children passed are passed from here

fetchTodos('all').then(todos => 
  console.log(todos)
	)

const store = configureStore()

render(
  <Root store = {store} />,
  document.getElementById('root')
)
