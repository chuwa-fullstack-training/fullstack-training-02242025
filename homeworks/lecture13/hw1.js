import React, { useState } from "react";

const App = () => {
  const [todo, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([
      ...todo,
      {
        id: Date.now(),
        text: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const remainingCount = todo.filter((item) => !item.completed).length;

  const allComplete = todo.length > 0 && todo.every((item) => item.completed);

  const allDone = () => {
    const newCompletedState = !allComplete;
    setTodos(
      todo.map((item) => ({
        ...item,
        completed: newCompletedState,
      }))
    );
  };

  const clearAll = (todo) => {
    setTodos(todo.filter((item) => !item.completed));
  };

  return (
    <div className="App">
      <div>
        <h1>Todos - ReactJs</h1>

        <form onSubmit={addNewTodo}>
          <input
            type="text"
            placeholder="What needs to be done?"
            onChange={handleInputChange}
            value={newTodo}
          />
        </form>

        <div>
          <span>{remainingCount} remaining</span>
          <button onClick={() => clearAll(todo)}>Clear Compeleted Todos</button>
        </div>

        <div>
          <input
            type="checkbox"
            onChange={() => allDone(todo)}
            checked={allComplete}
          />
          <span>Mark All Done</span>
        </div>

        <ul>
          {todo.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTodo(item.id)}
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
