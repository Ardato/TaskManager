import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const TaskListContest = createContext();

const TaskListContestProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "Read the book", id: 1 },
    { title: "Wash  the car", id: 2 },
    { title: "Write some code", id: 3 },
  ]);
  const [editItem, setEdtItem] = useState(null);
  const addTask = (title) => {
    setTasks([
      ...tasks,
      {
        title,
        id: uuidv4(),
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };
  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEdtItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            title,
            id,
          }
        : task
    );
    setTasks(newTasks)
  };

  return (
    <div>
      <TaskListContest.Provider
        value={{ tasks, addTask, removeTask, clearList, findItem ,editTask,editItem}}
      >
        {props.children}
      </TaskListContest.Provider>
    </div>
  );
};

export default TaskListContestProvider;
