
// https://beta.reactjs.org/learn/managing-state

import {useReducer} from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import TaskStateMgtLogicController from "./TaskStateMgtLogicController";

function StateMgtDemo(){
    const [tasks, dispatch] = useReducer(TaskStateMgtLogicController, initialTasks);
    function handleAddTask(text) {
        dispatch({type: 'added', id: nextId++, text: text,});
    }
    function handleDeleteTask(taskId) {
        dispatch({type: 'deleted', id: taskId});
    }

    return (
        <>
            <h1>State Management</h1>
            <AddTask onAdd={handleAddTask} />
            <TaskList list={tasks} onDeleteTask={handleDeleteTask}  />

        </>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
];

export default StateMgtDemo;
