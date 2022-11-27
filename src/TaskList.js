import {useContext} from 'react';
import { TaskContext } from "./TaskContext";

function TaskList(){

    const taskContext = useContext(TaskContext);

    const printLi = (t) => {
        return (
                <li key={t.id}>
                    {t.name}
                    <button onClick={() => console.log("deleting")}>Delete</button>
                </li>
        )
    }
    const taskList = taskContext.taskList.map((t) => printLi(t));
    return (
        <ul>
            {taskList}
        </ul>
    )
}

export default TaskList