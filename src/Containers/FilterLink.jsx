import { Link } from 'react-router'
import React, { PropTypes } from 'react'

// original implementation of filtering todos by reducer

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

// an example of declaring contextTypes in manual implemtation of Provider

/*
FilterLink.contextTypes = {
  store: React.PropTypes.object
}
*/

// a outdated react-router pattern implementation

/*
const mapStateToProps = (
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

// refactored so the router now handles filtering todos

// Filterlink is component takes filter ie paramater from router and all children as arguments
// uses Link imported from react router to render
// uses all as the initial  url path or uses the filter as path
// style prop styles link differently if it is selected
// passing children so parent can specify children
// see also Rootjs module uses WithRouter in conect func

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
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
// exported to Footer
export default FilterLink
