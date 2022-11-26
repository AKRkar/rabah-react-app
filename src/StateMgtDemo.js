
// https://beta.reactjs.org/learn/managing-state

import {useEffect, useState} from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function StateMgtDemo(){
    const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState([]);

    useEffect( () => {
        console.log("init effect....")
    }, [])
    useEffect( () => {
        console.log("taskText is changing..." + taskText)
    }, [taskText])

    return (
        <>
            <h1>State Management</h1>
            <AddTask taskText={taskText} setTaskText={setTaskText} taskList={taskList} setTaskList={setTaskList}/>
            <TaskList list={taskList} />

        </>
    );
}

export default StateMgtDemo;