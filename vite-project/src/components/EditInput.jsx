import React, { useState } from 'react';

export default function EditTodo({ index, updateTodo, setEdit }) {
  const [text, setText] = useState();

  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
	updateTodo(index, text);
	setEdit(false);
      }}>Save</button>
      <button onClick={() => setEdit(false)}>Cancel</button>
    </>
  );
}
