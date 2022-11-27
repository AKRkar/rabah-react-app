
import {useContext} from 'react';
import { TaskContext } from "./TaskContext"

export default function AddTask ({taskList, setTaskList}){
    const taskContext = useContext(TaskContext);
    const setText = (t) => {
        taskContext.changeText(t);
    };

    return(
        <>
            <input placeholder="Add task" value={taskContext.taskText}
                onChange={e => { setText(e.target.value);}}
            />
            <button onClick={() => {
                    setTaskList([...taskList, { id: taskList.length, name: taskContext.taskText }]);
                    setText('');
                }}>Add
            </button>
        </>
    )
}
