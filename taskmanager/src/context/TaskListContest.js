import React, { createContext, useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export const TaskListContest = createContext();

const TaskListContestProvider = (props) => {
  const initialStata = JSON.parse(localStorage.getItem('tasks'))|| []

  const [tasks, setTasks] = useState(initialStata);
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
    setTasks(newTasks);
  };

    useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

  return (
    <div>
      <TaskListContest.Provider
        value={{
          tasks,
          addTask,
          removeTask,
          clearList,
          findItem,
          editTask,
          editItem,
        }}
      >
        {props.children}
      </TaskListContest.Provider>
    </div>
  );
};

export default TaskListContestProvider;
