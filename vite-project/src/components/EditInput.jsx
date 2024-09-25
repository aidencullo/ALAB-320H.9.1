import React, { useState } from 'react';

export default function EditInput({ index, handleSave, handleCancel, todo }) {
  const [title, setTitle] = useState(todo.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveTitle = () => {
    handleSave(title);
  };

  return (
    <div>
      <input type="title" value={title} onChange={handleTitleChange} />
      <button onClick={handleSaveTitle}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}
