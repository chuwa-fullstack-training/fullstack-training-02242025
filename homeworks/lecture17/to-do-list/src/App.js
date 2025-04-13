import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTasks,
  addTask,
  toggleTask,
  deleteTask,
  clearCompleted,
  checkAll
} from './features/tasks/taskSlice';

function App() {
  const [task, setTask] = useState('');
  const taskList = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const updateTasks = (e) => setTask(e.target.value);

  const updateList = (e) => {
    if (e.key === 'Enter' && task.trim()) {
      e.preventDefault();
      dispatch(addTask(task));
      setTask('');
    }
  };

  const remaining = taskList.reduce((acc, t) => !t.completed ? acc + 1 : acc, 0);
  const allChecked = taskList.length > 0 && taskList.every(t => t.completed);

  return (
    <div className="App">
      <header><h1>To do List</h1></header>
      <h2>Task Remain: {remaining}</h2>

      <input
        type="text"
        value={task}
        onChange={updateTasks}
        onKeyDown={updateList}
        placeholder="Enter a task..."
      />

      <button onClick={() => dispatch(clearCompleted())}>Clear All Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={() => dispatch(checkAll())}
        />
        Mark All Done
      </label>

      <ul>
        {taskList.map((task) => (
          <li key={task._id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task._id))}
              />
              {task.title}
            </label>
            <button onClick={() => dispatch(deleteTask(task._id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
