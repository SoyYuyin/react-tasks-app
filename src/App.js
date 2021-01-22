// import './App.css';
import { useState } from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks' 

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Make bed", day: "Feb 5th at 2:30pm", reminder: false },
    { id: 2, text: "Morning Run", day: "Feb 5th at 2:30pm", reminder: true },
    { id: 3, text: "Deep work", day: "Feb 5th at 2:30pm", reminder: false },
    { id: 4, text: "Read", day: "Feb 5th at 2:30pm", reminder: false },
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Add or remove reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder:!task.reminder} :task ))
    }
  
  

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <p>No Tasks to show</p>}
    </div>
  );
}

export default App;
