import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const handleClick = () => {
    setTodos([...todos, 'New Todo'])
  }
  
  return (
    <>
      <h1>Create Todo List</h1>
      <input type="text" placeholder="Enter your todo" />
      <button onClick={handleClick}>Add Todo</button>

      <ul>
	{todos.map((todo, index) => (
	  <li key={index}>{todo}</li>
	))}
      </ul>
    </>
  )
}

export default App
