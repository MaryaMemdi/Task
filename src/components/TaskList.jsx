const TaskList = ({ taskList }) => {
  return (
    <>
      <ul>
        {taskList.map((task, index) => {
          return (
            <li key={index}>
              <span>{task}</span>
              <button>edit</button>
              <button> delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TaskList;
