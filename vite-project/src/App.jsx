import React, { useState } from 'react';

import Add from './components/Add';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <>
      <h1>Create Todo List</h1>
      <Add
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
