
function TaskList({list, onDeleteTask}){


    return (
        <ul>
            {list.map((t) => {return <Task t={t} onDelete={onDeleteTask} />;})}
        </ul>
    )
}

function Task ({t, onDelete}){ console.log(t)
    return (
        <li key={t.id}>
            {t.text}
            <button onClick={() => onDelete(t.id)}>Delete</button>
        </li>
    );
}
export default TaskList