import { connect } from 'react-redux'
import { TodoList } from 'components/TodoList'
import { getVisibleTodos } from 'components/getVisibleTodos'
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


const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state.todos, params.filter || 'all'),
})
const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  },
})
const VisibleTodoList = withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
  )(TodoList))
export default VisibleTodoList
