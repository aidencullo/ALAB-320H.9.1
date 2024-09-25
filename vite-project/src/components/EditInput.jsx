import React, { useState } from 'react';

export default function EditInput({ index, updateTodo, setIsEditting }) {
  const [text, setText] = useState("");

  const handleSave = () => {
    updateTodo(index, text);
    setIsEditting(false);
  };

  const handleCancel = () => {
    setIsEditting(false);
  };

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
}
