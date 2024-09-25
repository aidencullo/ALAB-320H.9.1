import React, { useState } from 'react'

import AddTodo from './components/AddTodo'

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

      <ul>
	{todos.map((todo, index) => (
	  <li key={index}>{todo}</li>
	))}
      </ul>
    </>
  )
}

export default App
