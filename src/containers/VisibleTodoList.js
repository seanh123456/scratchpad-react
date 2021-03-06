import { connect } from 'react-redux'
import { toggleTodo, editTodo } from '../actions/list'
import TodoList from '../components/todo/TodoList'
import { VisibilityFilters } from '../actions/list'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  editTodo: id => dispatch(editTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
