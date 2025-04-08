import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input.trim(), completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const markAll = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTodo()}
        placeholder="What needs to be done?"
      />
      <div className="controls">
        <button onClick={markAll}>Mark All as Completed</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <p>{activeCount} items left</p>
    </div>
  );
}

export default App;
