import { Link } from 'react-router'
import React, { PropTypes } from 'react'

// Filterlink is component takes filter ie paramater from router and all children as arguments
// uses Link imported from react router to render
// uses all as the initial  url path or uses the filter as path
// style prop styles link differently if it is selected
// passing children so parent can specify children


// governs state and behavior when a link is clicked
const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? 'all' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black ',
    }}
  >
    {children}
  </Link>
    )
FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
// exported to Components/Footer
export default FilterLink
