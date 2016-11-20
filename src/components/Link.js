import React from 'react'
export const Link = ({
  active,
  children,
  onClick,
// when rendered returns the links for each filter behavior
}) => {
// if filter equals current Filter returns span instead of link
  if (active) {
    return <span>{children}</span>
  }
  return (
// an anchor tag that has no destination
    <a href= "#"
// onClick prevents default behavior
// dispatches an action from the store when the links are clicked
// in this case the action with type SET_VISIBLITY_FILTER and
// passes in the filter prop which tells the reducer which filter is clicked
// children is passed down we can modify text
      onClick= { e => {
        e.preventDefault()
        onClick()
      }}
    >
    {children}
    </a>
    )
}
