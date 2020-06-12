import React, { useContext } from "react";
import { TaskListContest } from "../context/TaskListContest";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContest);
  return (
    <div>
      {tasks.length ? (
      <ul className="list">
      {tasks.map(task=>{
          return <Task task={task} key={task.id}/>
      })}
      </ul>
      ):(
        <div >
          <h1 className="no-tasks">No Tasks </h1>
          <h1 className="no-tasks">Free Time:)</h1>
        </div>
      )}
     
    </div>
  );
};

export default TaskList;
