import React from 'react'
import FilterLink from '../Containers/FilterLink'


// renders the links in the footer all active completed
// logic provided by Filterlink
// filter is prop passed down from FilterLink
const Footer = () => (
  <p>
    Show:
     {' '}
    <FilterLink
      filter="all"
    >
      all
    </FilterLink>
    {' '}
    <FilterLink
      filter="active"
    >
      active
    </FilterLink>
    {' '}
    <FilterLink
      filter="completed"
    >
      completed
    </FilterLink>
  </p>
)
// exported to App.jsx
export default Footer
