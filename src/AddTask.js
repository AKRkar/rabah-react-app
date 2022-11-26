

export default function AddTask ({taskText, setTaskText, taskList, setTaskList}){

    return(
        <>
            <input
                placeholder="Add task"
                value={taskText}
                onChange={e => { setTaskText(e.target.value);}}
            />
            <button onClick={() => {
                setTaskList([...taskList, { id: taskList.length, name: taskText }]);
            }}>
                Add
            </button>
        </>
    )
}