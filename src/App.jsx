import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// import Task from "./components/Task";
import { useState } from "react";
// import { useEffect } from "react";
function App() {
  const [task, setTask] = useState([]);

  const handleTask = (event) => {
    const inputTask = document.querySelector("#taskForm");
    const { value } = inputTask;
    const newTasks = [...task, value];
    setTask(newTasks);
    console.log(newTasks);
    console.log(task);
  };
  return (
    <>
      <TaskForm onEnterTask={handleTask} />
      {/* <Task task={task} /> */}
      <TaskList taskList={task} />
    </>
  );
}

export default App;
