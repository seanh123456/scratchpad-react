import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const List = () => (
  <section className="wrapper">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </section>
)

export default List
