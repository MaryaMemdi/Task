import Edit from "./edit";
const TaskList = ({ taskList }) => {
  return (
    <>
      <ul>
        {taskList.map((task) => {
          return (
            <div>
              <li key={task}>
                <span>
                  <Edit title={task} />
                </span>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default TaskList;
