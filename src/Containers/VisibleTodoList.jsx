// module imports of note is withRouter
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import TodoList from '../Components/TodoList'
import FetchError from '../Components/FetchError'
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../redux/RootReducer'
import * as actions from '../Actions/actions'

// Class component enhances pres component TodoList
// provides data fetching logic
class VisibleTodoList extends Component {


// fetches initial data
  componentDidMount() {
    this.fetchData()
  }
// fetches on filter prop provided by react router changes
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

// common code between lifecycle hooks extracted to create a new method
// fetchTodos and recieveodos imported as namespace imports from actions
  fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter).then(() => console.log('Yeah these are loaded!')) // eslint-disable-line no-console
  }

// renders
// Loading indicator logic
// Fetch Error component from Component/FetchError.jsx
// TodoList component from Component/TodoList.jsx
  render() {
    const { toggleTodo, todos, errorMessage, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <p> loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }
    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
        isFetching={isFetching}
      />
    )
  }
}
// merges returned object to components props when added as argument to connect func
// filter is caclulated from params prop injected from router
// methods are the selector functions imported from RootReducer
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  }
}

VisibleTodoList.defaultProps = {
  errorMessage: null,
}

VisibleTodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.string,
      text: PropTypes.string,
    }).isRequired,
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

// New VisibleTodoList component that is connected to redux store
// withRouter allows params props passed from router to be available to wrapped component
// mapDispatchToProps shorthand passes a map in object "actions" as argument to connect
// injects props that can dispatch actions into new VisibleTodoList component
VisibleTodoList = withRouter(connect( // eslint-disable-line no-class-assign
 mapStateToProps,
 actions,
  )(VisibleTodoList))

// exported to Components/App
export default VisibleTodoList
