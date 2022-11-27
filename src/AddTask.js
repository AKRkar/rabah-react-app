
import {useContext} from 'react';
import { TaskContext } from "./TaskContext"

export default function AddTask (){
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
                    taskContext.setTaskList([...taskContext.taskList, { id: taskContext.taskList.length, name: taskContext.taskText }]);
                    setText('');
                }}>Add
            </button>
        </>
    )
}
