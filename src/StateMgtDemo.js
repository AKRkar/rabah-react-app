
// https://beta.reactjs.org/learn/managing-state

import {useReducer, useState} from "react";
import axios from "axios";

import TaskList from "./TaskList";
import AddTask from "./AddTask";
import TaskStateMgtLogicController from "./TaskStateMgtLogicController";
import BlockUI from "./blockui";

function StateMgtDemo(){
    const [tasks, dispatch] = useReducer(TaskStateMgtLogicController, [{id: 0, text: "test..." }]);
    const [spinnerOn, setSpinnerOn] = useState(false);
    const [saveBtn, setSaveBtn] = useState("Save to DB");
    const [btnDisabled, setBtnDisabled] = useState(false);
    function handleAddTask(text) {
        dispatch({type: 'added', id: nextId++, text: text,});
    }
    function handleDeleteTask(taskId) {
        dispatch({type: 'deleted', id: taskId});
    }
    function handleChangeTask(task) {
        dispatch({type: 'changed',task: task,});
    }
    function saveToDb(){
        setSaveBtn((saveBtn + "....."));
        setSpinnerOn(true);
        axios.get("/tasks/1")
            .then(r => handleServerResp(r))
            .catch(e => handleServerResp(e)); // will connect to the server....
        setTimeout( () => {setSpinnerOn(false);}, 1000); // test spinner
        setBtnDisabled(true);
    }
    const handleServerResp = (resp) => {
        console.log(resp)
        let r = "";
        if(resp.response){ // error
            r = resp.request.responseURL + " - " + resp.name + " - " + resp.message
                + ". Req: " + resp.request.status + "/Res: " + resp.response.status;
        }
        else{
            r = resp.request.responseURL + " - "
                + resp.request.status + "/" + resp.statusText + ' - load: ' + resp.data;
        }

        setSaveBtn(r);
    }

    return (
        <>
            <h1>State Management</h1>
            <AddTask onAdd={handleAddTask} />
            <TaskList list={tasks} onDeleteTask={handleDeleteTask} onChangeTask={handleChangeTask}  />
            <button disabled={btnDisabled} onClick={() => { saveToDb()}}>{saveBtn}</button>
            <BlockUI blocking={spinnerOn} />
        </>
    );
}

let nextId = 0;

export default StateMgtDemo;
