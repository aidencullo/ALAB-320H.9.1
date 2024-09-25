export default function AddTodo({ handleClick }) {
  return (
    <div>
      <input type="text" placeholder="Enter your todo" />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}
