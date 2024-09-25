import { useState } from "react";

import EditInput from "./EditInput";
import TodoComponent from "./TodoComponent";

export default function Todo({ todo, index, updateTodo, removeTodo }) {
  const [isEditting, setIsEditting] = useState(false);

  const handleEdit = () => {
    setIsEditting(true);
  };

  const handleRemove = () => {
    removeTodo(index);
  };
  
  return (
    <>
      { isEditting ? (
        <EditInput index={index} updateTodo={updateTodo} setIsEditting={setIsEditting} todo={todo} />
      ) : (
        <TodoComponent todo={todo} handleEdit={handleEdit} handleRemove={handleRemove} />
      )}
    </>
  );
}
