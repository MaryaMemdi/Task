const TaskForm = ({ onEnterTask, id }) => {
  const handleClick = (event) => {
    console.log("you clicked");

    onEnterTask(event);
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        id="taskForm"
        className="form-control"
        placeholder="Enter new Task"
        aria-label="Enter new Task"
        aria-describedby="button-addon2"
      />
      <button
        onClick={handleClick}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Send
      </button>
    </div>
  );
};

export default TaskForm;
