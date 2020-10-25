import React from 'react'
import Footer from './todo/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const List = () => (
  <section className="wrapper">
    <header className="App-header">
      <h1>Todo List</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </header>
  </section>
)

export default List
