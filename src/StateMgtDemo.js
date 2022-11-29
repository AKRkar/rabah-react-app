
// https://beta.reactjs.org/learn/managing-state

import {useEffect, useState} from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function StateMgtDemo(){
    // const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [nextTaskId, setNextTaskId] = useState(0);

    function Add (task){
        setTaskList([...taskList, { id: nextTaskId, name: task }]);
        setNextTaskId(nextTaskId + 1);
    }

    return (
        <>
            <h1>State Management</h1>
            <AddTask onAdd={Add} />
            <TaskList list={taskList} />

        </>
    );
}

export default StateMgtDemo;
