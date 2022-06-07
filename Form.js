import { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addTask(event.target.task.value);
    setTask("");
  };

  const handleInput = (event) => {
    setTask(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        name="task"
        placeholder="Enter task ..."
        onChange={handleInput}
        value={task}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
