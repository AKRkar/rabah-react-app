
import { useState } from "react";

function TaskList({list, onDeleteTask, onChangeTask}){
    return (
        <ul>
            {list.map((t) => {return <li key={t.id}> <Task t={t} onDelete={onDeleteTask} onChange={onChangeTask} /> </li>;})}
        </ul>
    )
}

function Task ({t, onDelete, onChange}){ console.log(t)
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
        <>
            <input
                value={t.text}
                onChange={(e) => {
                onChange({...t,text: e.target.value,});
            }}
            />
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    );
    }else{ 
        taskContent = (
        <>
            {t.text}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
        );
    }
    return (
        <>
            {taskContent}
            <button onClick={() => onDelete(t.id)}>Delete</button>
        </>
    );
}
export default TaskList
