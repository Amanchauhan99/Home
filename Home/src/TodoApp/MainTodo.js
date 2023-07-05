import React, { useState } from 'react';
import "./Todo.css"

function TodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };

  const AddTodo = () => {
    if (inputValue.trim() !== '') {
      if (editingIndex === -1) {
        console.log(editingIndex);
        // Add new todo
        setTodos((prevTodos) => [...prevTodos, inputValue]);
      } else {
        // Edit existing todo
        setTodos((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos[editingIndex] = inputValue;
          return updatedTodos;
        });
        setEditingIndex(-1);
      }
      setInputValue('');
    }
  };

  const DeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const EditTodo = (index) => {
    setInputValue(todos[index]);
    setEditingIndex(index);
  };

  return (
    <div className='mainbox'>
        <div className='todohead'>
        <h2  className='todo'>Todos</h2></div>
      <input type="text" value={inputValue} onChange={InputChange} />
      <button onClick={AddTodo}>
        {editingIndex === -1 ? 'Add Todo' : 'Update Todo'}
      </button>
      
        {todos.map((todo, index) => (
          <li key={index} className='item1' >
            <div>{todo}</div>
           <div><button onClick={() =>DeleteTodo(index)}>Delete</button>
            <button onClick={() =>EditTodo(index)}>Edit</button></div> 
          </li>
        ))}
      
    </div>
  );
}

export default TodoApp;
