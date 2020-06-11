import React, { useContext, useState, useEffect } from "react";
import { TaskListContest } from "../context/TaskListContest";

const TaskForm = () => {
  const { addTask, clearList, tasks, editTask, editItem } = useContext(
    TaskListContest
  );
  const [title, setTitle] = useState("");

  const handeleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
      setTitle("")
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form className="form" onSubmit={handeleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task"
        required
      />
      {tasks.length ? (
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            Add Task
          </button>
          <button onClick={clearList} className="btn clear-btn">
            Clear Task
          </button>
        </div>
      ) : (
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            Add Task
          </button>
          <button disabled className="btn clear-btn">
            Clear Task
          </button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;
