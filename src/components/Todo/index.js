import './styles.css';

export default function Todo() {

  const todo = {
    id: 1,
    text: 'Mercado',
    items: [
      { checked: false, text: 'Arroz' },
      { checked: false, text: 'Feijão' },
      { checked: false, text: 'Batata' },
      { checked: false, text: 'Óleo' },
      { checked: false, text: 'Macarrão' },
      { checked: false, text: 'Leite' },
      { checked: false, text: 'Ovos' }
    ]
  }

  return (
    <div className="todo-container">
      <h1>{todo.text}</h1>
      <div className="todo-items">
        {
          todo.items.map((item, index) => (
            <div className="todo-item" key={index}>
              <label>
                <input type="checkbox" checked={item.checked} name={`todo${todo.id}item${item.id}`} />
                <span>{item.text}</span>
              </label>
            </div>
          ))
        }
      </div>
    </div>
  );
}
