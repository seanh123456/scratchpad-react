import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renameTodo } from '../../actions/list'

const Todo = ({ checkTodo, clickTodo, editing, completed, text, dispatch, todoid }) => {

  let input
  let todoText

  if (!editing) {
    todoText =
      <span
        onClick={clickTodo}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </span>
  } else {
    todoText =
      <input
        autoFocus
        className="rename"
        ref={node => (input = node)}
        defaultValue={text}
        onKeyPress={event => {
          if (event.key !== "Enter" || !input.value.trim()) {
            return
          }
          dispatch(renameTodo(todoid, input.value))
          input.value = ''
        }}
        onBlur={() => {
          if (!input.value.trim()) {
            return
          }
          dispatch(renameTodo(todoid, input.value))
          input.value = ''
        }}
      />
  }
  return (
    <li>
      <input type="checkbox" onClick={checkTodo} checked={completed}/>
      {todoText}
    </li>
  )
}

Todo.propTypes = {
  checkTodo: PropTypes.func.isRequired,
  clickTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  todoid: PropTypes.number.isRequired
}

export default connect()(Todo)
