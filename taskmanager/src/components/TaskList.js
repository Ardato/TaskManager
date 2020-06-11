import React,{useContext} from 'react';
import {TaskListContest} from "../context/TaskListContest"
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskListContest);
    return (
        <div>
            <ul className="list">
            {tasks.map((task)=>{
                return <Task key={task.task} task={task} />
            })}
            </ul>
        </div>
    )
}

export default TaskList
