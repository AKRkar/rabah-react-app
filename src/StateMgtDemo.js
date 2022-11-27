
// https://beta.reactjs.org/learn/managing-state

import {useState} from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { TaskContext } from "./TaskContext"

function StateMgtDemo(){
    const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState([]);
    const changeText = (value) => {
        setTaskText(value);
    };

    return (
        <>
            <h1>State Management</h1>
            <TaskContext.Provider value={{ taskText, changeText,taskList,setTaskList }}>
                <AddTask />
                <TaskList list={taskList} />
            </TaskContext.Provider>

        </>
    );
}

export default StateMgtDemo;
