import React, { useState } from 'react'

import Todo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const handleClick = (todo) => {
    setTodos([...todos, todo])
  }
  
  return (
    <>
      <h1>Create Todo List</h1>
      <Todo
       addTodo={handleClick}
      />
      <TodoList
	todos={todos}
      />
    </>
  )
}

export default App
