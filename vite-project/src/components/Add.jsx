import React, { useState } from "react";

export default function Add({ addTodo }) {
  const [text, setText] = useState("");

  const template = {
    userId: 1,
    id: Math.random() * 1000,
    isCompleted: false,
  };

  const handleClick = () => {
    if (!text) {
      alert("Please enter a todo");
      return;
    }
    addTodo({
      ...template,
      title: text,
    });
    setText("");
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}
