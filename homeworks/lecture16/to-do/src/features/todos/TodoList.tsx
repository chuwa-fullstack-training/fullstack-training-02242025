import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { 
  addTodo, 
  clearCompletedTodos,
  toggleAllTodos,
  selectTodos, 
  selectRemainingCount,
  selectAllComplete
} from './todosSlice.ts';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useAppSelector(selectTodos);
  const remainingCount = useAppSelector(selectRemainingCount);
  const allComplete = useAppSelector(selectAllComplete);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>TodoList App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          onChange={handleInputChange}
          value={newTodo}
        />
      </form>

      <div>
        <span>{remainingCount} remaining</span>
        <button onClick={() => dispatch(clearCompletedTodos())}>
          Clear Completed Todos
        </button>
      </div>

      <div>
        <input
          type="checkbox"
          onChange={() => dispatch(toggleAllTodos())}
          checked={allComplete}
        />
        <span>Mark All Done</span>
      </div>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};