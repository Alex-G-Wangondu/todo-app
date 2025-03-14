import './styles.css';
import { useState } from 'react';
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, {id: Date.now(), text: task, completed: false}]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='container'>
      <h1>To-Do List</h1>
      <input
      type='text'
      value={task}
      onChange={(e) => setTask(e.target.value)} 
      placeholder="Add a task..."
      />
      <button onClick={addTask}>Add</button>
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );

}
export default App
