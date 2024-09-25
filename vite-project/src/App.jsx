import React, { useState } from 'react'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const handleClick = () => {
    setTodos([...todos, 'New Todo'])
  }
  
  return (
    <>
      <h1>Create Todo List</h1>
      <AddTodo
        handleClick={handleClick}
      />
      <TodoList
	todos={todos}
      />
    </>
  )
}

export default App
