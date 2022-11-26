
// https://beta.reactjs.org/learn/managing-state

import {useEffect, useState, useContext} from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { TaskContext } from "./TaskContext"

function StateMgtDemo(){
    const taskContext = useContext(TaskContext);
    const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect( () => {
        // console.log("init effect....")
        // taskContext.setTaskText = setTaskText;
    }, [])
    useEffect( () => {
        console.log("taskText is changing: " + taskText)
        taskContext.taskText = taskText;
        if(taskText === '') taskContext.setTaskText = setTaskText;
    }, [taskText])

    return (
        <>
            <h1>State Management</h1>
            <TaskContext.Provider value={taskContext}>
                <AddTask taskList={taskList} setTaskList={setTaskList}/>
                <TaskList list={taskList} />
            </TaskContext.Provider>

        </>
    );
}

export default StateMgtDemo;