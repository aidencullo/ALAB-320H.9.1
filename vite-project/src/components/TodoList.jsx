import Todo from './Todo';

export default function TodoList({ todos, removeTodo }) {
  return (
    <div>
      <ul>
	{todos.map((todo, index) => (
	  <li key={index}>
	    <Todo todo={todo} />
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
	))}
      </ul>
    </div>
  );
}
