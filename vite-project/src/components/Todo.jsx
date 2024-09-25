import { useState } from "react";

import EditInput from "./EditInput";
import TodoContent from "./TodoContent";

export default function Todo({ todo, index, updateTodo, removeTodo }) {
  const [edit, setEdit] = useState(false);
  
  return (
    <>
      { edit ? (
        <EditInput index={index} updateTodo={updateTodo} setEdit={setEdit} />
      ) : (
        <>
          <TodoContent todo={todo} />
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </>
      )}
    </>
  );
}
