
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoList = ({ todos, doTask }) => {
  const clickDoTask = (id) => {
    doTask(id);
  };

  return (
    <div className="todo-list-container">
      {todos.map((task) => {
        return (
          <>
            <div
              className={
                task.done ? "todo-item-container done" : "todo-item-container"
              }
              onClick={() => clickDoTask(task.id)}
              key={task.id}
            >
              {task.done ? (
                <FaRegCheckCircle
                  color="#9a9a9a"
                  className="item-done-button"
                />
              ) : (
                <FaRegCircle className="item-done-button" color="#9a9a9a" />
              )}
              <div className="item-title">{task.content}</div>
              <div className="remain-date">
                  Remaining:{" "}
                  {new Date(task.dueDate).getDate() - new Date().getDate()}{" "}
                  day(s)
                </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;