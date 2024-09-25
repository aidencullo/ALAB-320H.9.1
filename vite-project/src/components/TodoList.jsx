import Todo from './Todo';

export default function TodoList({ todos, removeTodo }) {
  return (
    <div>
    {todos.map((todo, index) => (
      <div key={index}>
      <Todo todo={todo} /><button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    ))}
    </div>
  );
}
