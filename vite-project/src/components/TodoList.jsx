import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <div>
      <ul>
	{todos.map((todo, index) => (
	  <li key={index}>
	    <Todo todo={todo} />
          </li>
	))}
      </ul>
    </div>
  );
}
