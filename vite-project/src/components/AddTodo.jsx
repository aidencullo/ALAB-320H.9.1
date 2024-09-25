import React, { useState } from "react";

export default function Add({ updateTodos }) {
  const [text, setText] = useState("");

  const handleClick = () => {
    updateTodos(text);
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
