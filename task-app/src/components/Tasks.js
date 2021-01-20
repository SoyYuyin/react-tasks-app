import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Make bed", day: "Feb 5th at 2:30pm", reminder: false },
    { id: 2, text: "Morning Run", day: "Feb 5th at 2:30pm", reminder: true },
    { id: 3, text: "Deep work", day: "Feb 5th at 2:30pm", reminder: false },
    { id: 4, text: "Read", day: "Feb 5th at 2:30pm", reminder: false },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
