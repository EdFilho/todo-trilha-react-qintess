import Button from "../shared/Button";
import './styles.css';

export default function TodoList(props) {

  // const todos = [
  //   { id: 1, text: 'Mercado' },
  //   { id: 2, text: 'Meu mês' },
  //   { id: 3, text: 'Exemplo 3' },
  //   { id: 4, text: 'Exemplo 4' }
  // ]

  return (
    <div className="todo-list-container">
      <h1>ToDos</h1>
      <Button label="Criar" type="green" click={() => props.createTodo()} />
      <div className="todo-list">
        {
          props.todos.map(todo => (
            <div className="todo-list-item" key={todo.id}>
              <span onClick={() => props.onClick(todo)} >{todo.text}</span>
              <div className="todo-list-item-actions">
                <Button label="Editar" type="blue" click={() => props.editTodo(todo)} />
                <Button label="Apagar" type="red" click={() => props.removeTodo(todo.id)} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
