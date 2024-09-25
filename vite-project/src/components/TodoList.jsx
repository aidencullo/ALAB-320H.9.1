import Todo from './Todo';

export default function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ))}
    </>
  );
}
