
import {useContext} from 'react';
import { TaskContext } from "./TaskContext";

export default function AddTask (){
    const taskContext = useContext(TaskContext);

    return(
        <>
            <input placeholder="Add task" value={taskContext.taskText}
                onChange={e => { taskContext.setTaskText(e.target.value);}}
            />
            <button onClick={() => {
                    taskContext.setTaskList([...taskContext.taskList, { id: taskContext.taskList.length, name: taskContext.taskText }]);
                    taskContext.setTaskText('');
                }}>Add
            </button>
        </>
    )
}
