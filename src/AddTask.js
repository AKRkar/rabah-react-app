
import {useContext, useEffect, useState} from 'react';
import { TaskContext } from "./TaskContext"

export default function AddTask ({taskList, setTaskList}){
    const taskContext = useContext(TaskContext);
    const [tt, setTt] = useState('');

    useEffect( () => {
        console.log(taskContext)
        setTt(taskContext.taskText)
    })

    // useEffect( () => {
    //     setTt(taskContext.taskText);
    // }, [tt])

    return(
        <>
            <input
                placeholder="Add task"
                value={tt}
                onChange={e => { taskContext.setTaskText(e.target.value);}}
            />
            <button onClick={() => {
                setTaskList([...taskList, { id: taskList.length, name: taskContext.taskText }]);
            }}>
                Add
            </button>
        </>
    )
}