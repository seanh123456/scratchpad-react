import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/counter'

function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <section className="wrapper">
      <header className="App-header">
        <h1>Counter</h1>
        <p>Counter: {counter}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </header>
    </section>
  )
}

export default Counter
