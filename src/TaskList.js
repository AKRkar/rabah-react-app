
function TaskList({list}){
    const printLi = (t) => {
        return (
                <li key={t.id}>
                    {t.name}
                    <button onClick={() => console.log("editing")}>edit</button>
                    <button onClick={() => console.log("deleting")}>Delete</button>
                </li>
        )
    }
    const taskList = list.map((t) => printLi(t));
    return (
        <ul>
            {taskList}
        </ul>
    )
}

export default TaskList