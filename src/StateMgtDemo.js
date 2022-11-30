
// https://beta.reactjs.org/learn/managing-state

import {useReducer, useState} from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import TaskStateMgtLogicController from "./TaskStateMgtLogicController";

function StateMgtDemo(){
    const [tasks, dispatch] = useReducer(TaskStateMgtLogicController, [{id: 0, text: "test..." }]);
    function handleAddTask(text) {
        dispatch({type: 'added', id: nextId++, text: text,});
    }
    function handleDeleteTask(taskId) {
        dispatch({type: 'deleted', id: taskId});
    }
    function handleChangeTask(task) {
        dispatch({type: 'changed',task: task,});
    }
    const [saveBtn, setSaveBtn] = useState("Save to DB");
    function saveToDb(){
        let orgVal = saveBtn;
        let newBtn = saveBtn + ".....";
        setSaveBtn(newBtn);
        setTimeout( () => {console.log(newBtn); setSaveBtn(orgVal);}, 1000);
        // axio.post("/bassamserver/save/tasks", tasks)
        //     .then((response => {console.log(response); setSaveBtn("Successfully saved tasks");})
        //     .catch(e => {console.log(e); setSaveBtn("Sorry error...");}); // will connect to the server....

    }
    return (
        <>
            <h1>State Management</h1>
            <AddTask onAdd={handleAddTask} />
            <TaskList list={tasks} onDeleteTask={handleDeleteTask} onChangeTask={handleChangeTask}  />
            <button onClick={() => { saveToDb()}}>{saveBtn}</button>
        </>
    );
}

let nextId = 0;

export default StateMgtDemo;
