// module imports
import React from 'react'
import FilterLink from 'containers/Filterlink'

// another stateless presentational component
// creates a paragraph tag
// which renders the links in the footer all active completed
// FilterLink is the child component
// FilterLink is a container component
// that governs state and behavior when a link is clicked
// filter is prop passed down from FilterLink
// See FilterLink module
export const Footer = () => (
  <p>
        Show:
        {' '}
        <FilterLink
          filter = "all"
        >
         all
         </FilterLink>
         {' '}
        <FilterLink
          filter = "active"
        >
         active
         </FilterLink>
          {' '}
        <FilterLink
          filter = "completed"
        >
         completed
         </FilterLink>
         </p>
         )
