import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { renameTodo } from '../../actions/list'

const Todo = ({ onClick, completed, text, dispatch, todoid }) => {

  let input
  return (
    <li>
      <div
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
      {text}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(renameTodo(todoid, input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Rename</button>
      </form>
    </li>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect()(Todo)
