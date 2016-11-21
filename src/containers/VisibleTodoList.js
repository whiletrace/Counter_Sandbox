import { connect } from 'react-redux'
import { TodoList } from 'components/TodoList'
import { getVisibleTodos } from 'components/getVisibleTodos'
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
const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(
           state.todos,
           state.visibilityFilter
            ),
})
const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id))
  },
})
const VisibleTodoList = connect(
 mapStateToProps,
 mapDispatchToProps
  )(TodoList)
export default VisibleTodoList
