import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask
} from './redux/taskSlice';

const TaskList = () => {
  const { items, loading, error } = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  console.log(items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(createTask(input));
      setInput('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Task List</h2>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {items.map(task => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => dispatch(deleteTask(task._id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
