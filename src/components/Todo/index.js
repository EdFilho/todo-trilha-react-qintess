import './styles.css';
import Button from '../shared/Button/index';

export default function Todo({ currentTodo, createItem, checkItem }) {
  return (
    <div className="todo-container">
      {currentTodo && (<>
        <h1>{currentTodo.text}</h1>
        <Button label="Adicionar Item" type="green" click={() => createItem(currentTodo)} />
        <div className="todo-items">
          {
            currentTodo.items.map((item, index) => (
              <div className="todo-item" key={index}>
                <label>
                  <input type="checkbox" readOnly checked={item.checked} name={`todo${currentTodo.id}item${item.id}`} onClick={() => checkItem(item.id, currentTodo)} />
                  <span>{item.text}</span>
                </label>
              </div>
            ))
          }
        </div>
      </>)}
    </div>
  );
}
