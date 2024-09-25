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
  
  const handleSave = (title) => {
    updateTodo(index, { ...todo, title });
    setIsEditting(false);
  };

  const handleCancel = () => {
    setIsEditting(false);
  };
  
  return (
    <>
      { isEditting ? <EditInput
                       index={index}
                       todo={todo}
                       handleSave={handleSave}
                       handleCancel={handleCancel}
                     /> : <TodoComponent
                            todo={todo}
                            handleEdit={handleEdit}
                            handleRemove={handleRemove}
                          />
      }
    </>
  );
}
