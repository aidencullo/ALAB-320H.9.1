import Todo from './Todo';

export default function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <div>
    {todos.map((todo, index) => (
      <div key={index}>
        <Todo todo={todo} updateTodo={updateTodo} index={index} />
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    ))}
    </div>
  );
}
