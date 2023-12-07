import { useState, useEffect } from "react";
import "./App.css";
import TaskDetails from "./components/TaskDetails";
import Task from "./components/Task";


function App() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [oldTasks, setOldTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setOldTasks(data));
  }, 
  []);

  //Add task
  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      const newTask = {
        id: tasks.length + oldTasks.length + 1,
        title: taskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
      console.log(newTask);
    }
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };
  return (
    <div className="app">
      <h1>Task Management App</h1>

      <div className="main-container">
        <div className="input-panel">
          <input
            type="text"
            placeholder="Enter Task title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button onClick={handleAddTask} className="button">
            Add Task
          </button>
          <div className="details-panel">
            {selectedTask && <TaskDetails task={selectedTask} />}
          </div>

         <div className="task-list">{tasks.map((task) => (<Task key={task.id} task= {task} onclick={() => handleTaskClick(task)}/>))}
          {oldTasks.map((task) => (<Task key={task.id} task= {task} onclick={() => handleTaskClick(task)}/>))}
          
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;
