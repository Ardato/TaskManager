import React, { useContext } from "react";
import { TaskListContest } from "../context/TaskListContest";
const Task = ({ task ,id}) => {
  const {removeTask,findItem}=useContext(TaskListContest)
  return (
    <li className="list-item" >
      <span>{task.title}</span>
      <div>
        <button onClick={ ()=>removeTask(task.id)} className="btn-delete task-btn">
          <i className="fas fa-trash-alt" ></i>
        </button>
        <button onClick={()=>findItem(task.id)} className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>

    </li>
  );
};

export default Task;
