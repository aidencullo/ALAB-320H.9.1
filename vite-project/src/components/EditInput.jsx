import React, { useState } from 'react';

export default function EditInput({ index, handleSave, handleCancel, todo }) {
  const [text, setText] = useState(todo);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={() => handleSave(text)}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );
}
