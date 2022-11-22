

// https://beta.reactjs.org/learn/managing-state

import {useEffect, useState} from "react";

function StateMgtDemo(){
    const [taskText, setTaskText] = useState('');

    useEffect( () => {
        console.log("init effect....")
    }, [])
    useEffect( () => {
        console.log("taskText is changing..." + taskText)
    }, [taskText])

    return (
        <>
            <h1>State Management</h1>
            <input
                placeholder="Add task"
                value={taskText}
                onChange={e => { setTaskText(e.target.value); console.log(taskText)}}
            />
            <button onClick={() => {console.log("text...")}}>Add</button>
            <ul>
                <li>
                    {taskText}
                    <button onClick={() => console.log("deleting")}>Delete</button>
                </li>
            </ul>
        </>
    );
}

export default StateMgtDemo;