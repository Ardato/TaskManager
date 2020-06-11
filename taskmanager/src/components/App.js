import React from "react";
import "../App.css";
import TaskList from "./TaskList";
import TaskListContestProvider from "../context/TaskListContest";
import TaskForm from "./TaskForm";
import Header from "./Header";
const App = () => {
  return (
    <TaskListContestProvider>
      <div className="container">
        <div className="app-wrapper">
            <Header/>
          <div className="main">
            <TaskForm/>
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContestProvider>
  );
};

export default App;
