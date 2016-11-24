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
