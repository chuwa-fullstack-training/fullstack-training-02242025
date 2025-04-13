import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, checkAll, clearCompleted } from './features/tasks/taskSlice';

function App() {
  const [task, setTask] = useState('');
  const taskList = useSelector(state => state.tasks);
  const dispatch = useDispatch();

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
        {taskList.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(index))}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
