import React from "react";
import "../App.css";
import TaskList from "./TaskList";
import TaskListContestProvider from "../context/TaskListContest";
const App = () => {
  return (
    <TaskListContestProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContestProvider>
  );
};

export default App;
