import React, { useState } from 'react'

import Add from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const updateTodos = (todo) => {
    setTodos([...todos, todo])
  }
  
  return (
    <>
      <h1>Create Todo List</h1>
      <Add
        updateTodos={updateTodos}
      />
      <TodoList
	todos={todos}
      />
    </>
  )
}

export default App
