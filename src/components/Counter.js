import React from 'react'
import { connect } from 'react-redux'
import { initCount, getIncrement, getDecrement } from '../actions/counter'

class Counter extends React.Component {

  componentDidMount() {
    this.props.getCount();
  }

  render() {
    return (
      <section className="wrapper">
      <header className="App-header">
      <h1>Counter {this.props.loading ? 'loading...' : 'loaded'}</h1>
      <p>Counter: {this.props.loading ? '???' : this.props.count}</p>
      <button onClick={() => this.props.increment()}>+</button>
      <button onClick={() => this.props.decrement()}>-</button>
      </header>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({ count: state.counter.count, loading: state.counter.loading })
const mapDispatchToProps = (dispatch, props) => ({ getCount: initCount, increment: getIncrement, decrement: getDecrement })

Counter = connect(mapStateToProps, mapDispatchToProps) (Counter)

export default Counter
