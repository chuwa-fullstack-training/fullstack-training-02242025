import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted, markAllDone } from './redux/todoSlice';

export default function App() {
  const todos = useSelector((state) => state.todos.todos);
  const remaining = todos.filter((t) => !t.done).length;
  const dispatch = useDispatch();

  return (
    <div className="todo-container">
      <h1>Todos - Redux Edition 🧠</h1>

      <TodoInput />

      <div className="actions">
        <span>{remaining} remaining</span>
        <button onClick={() => dispatch(clearCompleted())}>
          Clear Completed Todos
        </button>
      </div>

      <div>
        <label>
          <input type="checkbox" onChange={() => dispatch(markAllDone())} />
          Mark All Done
        </label>
      </div>

      <TodoList />
    </div>
  );
}
