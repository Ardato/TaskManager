import React,{createContext,useState} from 'react'

export const TaskListContest=createContext();


const TaskListContestProvider=(props) =>{
    const [tasks, setTasks] = useState([
        {title:"Read the book"},
        {title:"Wash  the car"},
        {title:"Write some code"}
    ]);


    return (
        <div>
            <TaskListContest.Provider value={{tasks}}>
            {props.children}
            </TaskListContest.Provider>
        </div>
    )
}

export default TaskListContestProvider
