import Button from "../shared/Button";
import './styles.css';

export default function TodoList({ todos, removeTodo, setCurrentTodo, createTodo, editTodo }) {
  return (
    <div className="todo-list-container">
      <h1>ToDos</h1>
      <Button label="Criar" type="green" click={() => createTodo()} />
      <div className="todo-list">
        {
          todos.map(todo => (
            <div className="todo-list-item" key={todo.id}>
              <span onClick={() => setCurrentTodo(todo)} >{todo.text}</span>
              <div className="todo-list-item-actions">
                <Button label="Detalhes" type="yellow" click={() => setCurrentTodo(todo)} />
                <Button label="Editar" type="blue" click={() => editTodo(todo)} />
                <Button label="Apagar" type="red" click={() => removeTodo(todo.id)} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
