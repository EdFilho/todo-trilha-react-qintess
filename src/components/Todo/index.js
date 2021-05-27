import './styles.css';
import Button from '../shared/Button/index';

export default function Todo(props) {

  return (
    <div className="todo-container">
      <h1>{props.currentTodo.text}</h1>
      <Button label="Adicionar Item" type="green" click={() => props.createItem(props.currentTodo)} />
      <div className="todo-items">
        {
          props.currentTodo.items.map((item, index) => (
            <div className="todo-item" key={index}>
              <label>
                <input type="checkbox" readOnly checked={item.checked} name={`todo${props.currentTodo.id}item${item.id}`} onClick={() => props.checkItem(item.id, props.currentTodo)} />
                <span>{item.text}</span>
              </label>
            </div>
          ))
        }
      </div>
    </div>
  );
}
