import { useState } from "react";

import Edit from "./Edit";

export default function Todo({ todo, index, updateTodo }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);
  
  return (
    <>
      { edit ? (
        <>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => {
	    updateTodo(index, text);
	    setEdit(false);
          }}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </>
  );
}
