

import { Link } from 'react-router'
import React, { PropTypes } from 'react'
/* const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle = {{
      textDecoration: 'none',
      color: 'black',
    }}
    >
    {children}
    </Link>
)

*/

/*
class FilterLink extends React.Component {
  componentDidMount() {
    const {store} = this.context
    this.unsubscribe = store.subscribe(() =>
       this.forceUpdate()
      )
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  render(){
    const props = this.props
    const { store } = this.context
    const state = store.getState()
    return(
      <Link
       active = {
        props.filter ===
        state.visibilityFilter
       }
       onClick={() =>
        store.dispatch({
          type: 'SET_VISIBLITY_FILTER',
          filter: props.filter,
        })
       }
      >
      {props.children}
      </Link>
      )
  }

FilterLink.contextTypes = {
  store: React.PropTypes.object
}
*/


/* const mapStateToProps = (
  state,
  ownprops
  ) => ({
    active:
      ownprops.filter ===
      state.visibilityFilter,
  })
const mapDispatchToProps = (
   dispatch,
   ownprops
  ) => ({
    onClick: () => {
      dispatch(setVisibilityFilter(ownprops.filter))
    },
  })
const FilterLink = connect(
 mapStateToProps,
 mapDispatchToProps
  )(Link)
  */
const FilterLink = ({ filter, children }) => (
      <Link
        to ={ filter === 'all' ? '' : filter }
        activeStyle = {{
          textDecoration: 'none',
          color: 'black ',
        }}
      >
      {children}
      </Link>
    )
FilterLink.propTypes = {
  filter: PropTypes.string,
  children: PropTypes.node,
}

export default FilterLink
