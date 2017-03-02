// module imports of note is withRouter
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import * as fromTodos from '../redux/Todo_redux'
import TodoList from '../Components/TodoList'
import { toggleTodo } from '../Actions/actions'


// Original implementation of VisibleTodoList

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

// const mapDispatchToProps = (dispatch) => ({
// onTodoClick: (id) => {
// dispatch(toggleTodo(id))
// },
// })

// New implementation

// getVisibleTodos now the colocated selector
// encapsulates the whole application state shape
// passing the whole application state
// will decide how to select active/completed todos (filter argument)
// based on the logic of getVisibleTodos selector
const getVisibleTodos = (state, filter) =>
fromTodos.getVisibleTodos(state.todos, filter)

// original implementation of  visibilityFilter now Router is handling via params and
// withRouter to pass visibilityFilter via props
 /*
 const visibilityFilter = (
  state = 'SHOW_ALL',
  action
  ) => {
  switch (action.type) {
    case 'SET_VISIBLITY_FILTER':
      return action.filter
    default: return state
  }
}
*/

// visible todos are now handled via the router
// this is passed to components as a special prop called paramater
// shortend to params corresponds to the filter parameter in route config
// this implementation replaced the visibilityFilter reducer
// function takes state and params as arguments
// creates object with key todos
// method that calls function getVisibleTodos
// state and params.filter argumetments corresponding to filter paramater at route confing
// generating a container component that injects the redux state tree
const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all'),
})

// params are passed via the withRouter function
// map dispatch to props shorthand
// when arguments from the action creator
// and call back props match exactly
// connect function subscribes
// components to store injecting store data
// and lets component dispatch actions
const VisibleTodoList = withRouter(connect(
 mapStateToProps,
 { onTodoClick: toggleTodo },
  )(TodoList))

// exported to module App
export default VisibleTodoList
