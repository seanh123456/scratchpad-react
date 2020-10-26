import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/list'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      Add todo: <input
        autoFocus
        ref={node => (input = node)}
        onKeyPress={ event =>  {
            if (event.key !== "Enter" || !input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }}
        onBlur={() => {
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
       />
    </div>
  )
}

export default connect()(AddTodo)
