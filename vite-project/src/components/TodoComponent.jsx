import TodoContent from "./TodoContent";

export default function Todo({ todo, handleEdit, handleRemove }) {
  return (
    <>
      <TodoContent todo={todo} />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleRemove}>Remove</button>
    </>
  );
}
