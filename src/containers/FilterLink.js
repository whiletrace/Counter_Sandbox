import { connect } from 'react-redux'
import { Link } from 'components/Link'
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
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}
*/
const mapStateTolinkProps = (
  state,
  ownprops
  ) => ({
    active:
      ownprops.filter ===
      state.visibilityFilter,
  })
const mapDispatchToLinkProps = (
   dispatch,
   ownprops
  ) => ({
    onClick: () => {
      dispatch({
        type: 'SET_VISIBLITY_FILTER',
        filter: ownprops.filter,
      })
    },
  })
const FilterLink = connect(
 mapStateTolinkProps,
 mapDispatchToLinkProps
  )(Link)

export default FilterLink
