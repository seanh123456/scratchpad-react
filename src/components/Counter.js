import React from 'react'
import { connect } from 'react-redux'
import { initCount, getIncrement, getDecrement } from '../actions/counter'

let Counter = ({ getCount, increment, decrement, count, loading }) => (
    <section className="wrapper">
      <header className="App-header">
        <h1>Counter {loading ? 'loading...' : 'loaded'}</h1>
        <p>Counter: {loading ? '???' : count}</p>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </header>
    </section>
)

const mapStateToProps = (state) => ({ count: state.counter.count, loading: state.counter.loading })
const mapDispatchToProps = { getCount: initCount, increment: getIncrement, decrement: getDecrement }

Counter = connect(mapStateToProps, mapDispatchToProps) (Counter)

export default Counter
