import useStorageState from "./Hooks/useStorageState";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
// import Task from "./components/Task";
import { useEffect, useState } from "react";

let newTaskArray;
function App() {
  const [tasks, setTask] = useState(
    localStorage.getItem("task") === null
      ? []
      : localStorage.getItem("task").split(",")
  );
  useEffect(() => {
    localStorage.setItem("task", tasks);
  }, [tasks]);

  const inputTask = document.querySelector("#taskForm");
  const handleTask = (event) => {
    const { value } = inputTask;
    const newTasks = [...tasks, value];

    setTask(newTasks);
  };
  const handleChange = (event) => {
    console.log("you click");
  };

  return (
    <>
      <TaskForm onEnterTask={handleTask} />
      {/* <Task task={task} /> */}
      <TaskList taskList={tasks} onChange={handleChange} />
    </>
  );
  localStorage.removeItem();
}

export default App;
