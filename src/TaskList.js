
function TaskList({list}){
    const printLi = (task) => {
        return (
            <Task  t={task} />  
        )
    }
    function Task ({t}){
        return (
            <li key={t.id}>
                    {t.name}
                    <button onClick={() => console.log("deleting")}>Delete</button>
            </li>
        );
    }
    const taskList = list.map((t) => printLi(t));
    return (
        <ul>
            {taskList}
        </ul>
    )
}

export default TaskList