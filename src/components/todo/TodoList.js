import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, editTodo, toggleTodo }) => (
  <ul className="todo">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} checkTodo={() => toggleTodo(todo.id)} clickTodo={() => editTodo(todo.id)} todoid={todo.id} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired
}

export default TodoList
