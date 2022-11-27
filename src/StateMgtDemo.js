
// https://beta.reactjs.org/learn/managing-state

import {useState} from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { TaskContext } from "./TaskContext"

function StateMgtDemo(){
    const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState([]);
    
    return (
        <>
            <h1>State Management</h1>
            <TaskContext.Provider value={{ taskText,setTaskText,taskList,setTaskList }}>
                <AddTask />
                <TaskList list={taskList} />
            </TaskContext.Provider>

        </>
    );
}

export default StateMgtDemo;
