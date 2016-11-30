import { connect } from 'react-redux'
import { TodoList } from 'components/TodoList'
import { getVisibleTodos } from 'redux/RootReducer'
import { toggleTodo } from 'Actions/actions'
import { withRouter } from 'react-router'
/*
class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
       this.forceUpdate()
      )
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    const props = this.props
    const { store } = this.context
    const state = store.getState()
    return (
      <TodoList
        todos = {
          getVisibleTodos(
           state.todos,
           state.visibilityFilter
            )
        }
        onTodoClick = { id =>
         store.dispatch({
        type: 'TOGGLE_TODO',
        id,
      })
    }
    />
      )
  }
}
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}
*/
// getVisibleTodos now the colocated selector
// encapsulates the whole application state shape
// passing the whole application state
// will decide how to select active/completed todos
// based on the logic of getVisibleTodos selector

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all'),
})
// const mapDispatchToProps = (dispatch) => ({
// onTodoClick: (id) => {
// dispatch(toggleTodo(id))
// },
// })
const VisibleTodoList = withRouter(connect(
 mapStateToProps,
 // map dispatch to props shorthand
 // when arguments from the action creator
 // and call back props match exactly
 { onTodoClick: toggleTodo }
  )(TodoList))
export default VisibleTodoList
