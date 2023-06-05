import React from 'react'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'
import FilterTodos from './FilterTodos'

import "./styles.css"

function TodoApp() {
  return (
    <>
      <section mv-app="todoapp" class="todoapp" mv-bar="none" mv-storage="local" mv-autosave="3" mv-mode="edit" mv-init="#data">
        <AddTodo />
        <ListTodo />
        <FilterTodos />
      </section>
    </>
  )
}

export default TodoApp;
