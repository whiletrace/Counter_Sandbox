import React from 'react'
import FilterLink from 'containers/Filterlink'
export const Footer = () => (
  <p>
{ /* A paragraph element is created using the filterlink component
the filter props are given values here with three choices
SHOW_ALL SHOW_ACTIVE SHOW_COMPLETED
passing  currentFilter so each will know which filter is being executed
and apply the correct styling to it*/ }
        Show:
        {' '}
        <FilterLink
          filter = "SHOW_ALL"
        >
         All
         </FilterLink>
         {' '}
        <FilterLink
          filter = "SHOW_ACTIVE"
        >
         Active
         </FilterLink>
          {' '}
        <FilterLink
          filter = "SHOW_COMPLETED"
        >
         completed
         </FilterLink>
         </p>
         )
