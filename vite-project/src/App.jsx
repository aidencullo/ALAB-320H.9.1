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

  const updateTodo = (index, newTodo) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
	return newTodo;
      }
      return todo;
    });
    setTodos(newTodos);
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
        updateTodo={updateTodo}
      />
    </>
  );
}

export default App;
