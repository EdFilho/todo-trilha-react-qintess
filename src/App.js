import './App.css';
import './styles/button.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import React, { useState } from 'react';

function App() {
  var [currentTodo, setCurrentTodo] = useState();
  var [todos, setTodos] = useState([{
    id: 0,
    text: 'Mercado',
    items: [
      { id: 1, checked: false, text: 'Arroz' },
      { id: 2, checked: false, text: 'Feijão' },
      { id: 3, checked: false, text: 'Batata' },
      { id: 4, checked: false, text: 'Óleo' },
      { id: 5, checked: false, text: 'Macarrão' },
      { id: 6, checked: false, text: 'Leite' },
      { id: 7, checked: false, text: 'Ovos' }
    ]
  },
  ]);

  function createTodo() {
    var todoName = prompt("Adicione um novo ToDo", "ToDo");
    if (todoName != null && todoName !== '') {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: todoName,
        items: []
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
    }
  }

  const removeTodo = id => {
    const updatedTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = todo => {
    var updatedName = prompt("Atualizar todo", todo.text);
    if (updatedName != null && updatedName !== '') {
      const newTodo = {
        id: todo.id,
        text: updatedName,
        items: todo.items
      };
      updateTodos(newTodo);
    }
  }

  const updateTodos = todo => {
    const updatedTodos = [...todos];
    updatedTodos.forEach((element, index) => {
      if (element.id === todo.id) {
        updatedTodos[index] = todo;
        if (todo.id === currentTodo.id) {
          setCurrentTodo(todo);
        }
      }
    });
    setTodos(updatedTodos);
  }

  const createItem = todo => {
    var itemText = prompt("Novo Item", 'Item');
    if (itemText != null && itemText !== '') {
      const newItem = {
        checked: false,
        text: itemText
      }
      todo.items = [...todo.items, newItem];

      updateTodos(todo);
    }
  }

  const checkItem = (itemId, todo) => {
    todo.items.forEach((element) => {
      if (element.id === itemId) {
        element.checked = !element.checked;
      }
    });
    updateTodos(todo);
  }

  return (
    <div className="App">
      <TodoList todos={todos} removeTodo={removeTodo} setCurrentTodo={setCurrentTodo} createTodo={createTodo} editTodo={editTodo} />
      <Todo currentTodo={currentTodo} createItem={createItem} checkItem={checkItem} />
    </div>
  );
}

export default App;
