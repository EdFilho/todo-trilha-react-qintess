import Button from "../base/Button";
import './styles.css';

export default function TodoList() {

  const todos = [
    { id: 1, text: 'Mercado' },
    { id: 2, text: 'Meu mês' },
    { id: 3, text: 'Exemplo 3' },
    { id: 4, text: 'Exemplo 4' }
  ]

  return (
    <div className="todo-list-container">
      <h1>ToDos</h1>
      <Button label="Criar" type="green" click={() => alert('Criar')} />
      <div className="todo-list">
        {
          todos.map(todo => (
            <div className="todo-list-item" key={todo.id}>
              <span>{todo.text}</span>
              <div className="todo-list-item-actions">
                <Button label="Editar" type="blue" click={() => alert('Editar')} />
                <Button label="Apagar" type="red" click={() => alert('Apagar')} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
