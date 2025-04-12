import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  function updateTasks(e){
    setTask(e.target.value);
  }
  function updateList(e){
    if(e.key ==='Enter'){
      e.preventDefault();
      setTaskList([...taskList, {text: task, completed: false}]);
      setTask('');
    } 
   }
  
   const toggleTask =(index)=>{
    const updatedList = taskList.map((t, i)=> i===index? {...t, completed: !t.completed}:t);
    setTaskList(updatedList);
   }

   const checkAll =()=>{
    const allCompleted = taskList.every(task => task.completed);
    const updatedList = taskList.map(task => ({ ...task, completed: !allCompleted }));
    setTaskList(updatedList);
   }

   const clearCompleted = ()=>{
    const updatedList = taskList.filter((t)=>t.completed===false);
    setTaskList(updatedList);
   }
  return (
    <div className="App">
      <header><h1>To do List</h1></header>
      <h2>Task Remain:{taskList.reduce((acc, t)=> !t.completed? acc+1: acc, 0)}</h2>
      
      <input
      type='text'
      value={task}
      onChange={updateTasks}
      onKeyDown={updateList}></input>
      
      <button onClick={clearCompleted}>Clear All Completed</button>
      <br></br>
      <label>
              <input
              type='checkbox' 
              checked={taskList.length > 0 && taskList.every(task => task.completed)}
              onChange={checkAll}/>
              Mark All Done
      </label>
      <ul>
        {taskList.map((task, index)=>
          (<li key={index}>
            <label>
              <input
              type='checkbox' 
              checked={task.completed}
              onChange={()=>toggleTask(index)}/>
              {task.text}
            </label>
            </li>))}
      </ul>
    </div>
  );
}

export default App;
