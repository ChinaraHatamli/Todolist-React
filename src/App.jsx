import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo === "") return;
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleEdit = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter New Todo"
      />
      <button onClick={addTodo}>Add+</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span
              contentEditable="true"
              onBlur={(e) => handleEdit(index, e.target.textContent)}
            >
              {todo}
            </span>
            <button onClick={() => handleEdit(index, prompt("Edit:", todo))}>
              Edit
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
