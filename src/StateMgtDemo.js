
// https://beta.reactjs.org/learn/managing-state

import {useEffect, useState} from "react";
import Heading from "./Heading";
import Section from "./Section";
import TaskList from "./TaskList";

function StateMgtDemo(){
    const [taskText, setTaskText] = useState('');
    const [taskList, setTaskList] = useState([]);
    const [nextTaskId, setNextTaskId] = useState(0);


    useEffect( () => {
        console.log("init effect....")
    }, [])
    useEffect( () => {
        console.log("taskText is changing..." + taskText)
    }, [taskText])

    return (
        <>
            <h1>State Management</h1>
            <input
                placeholder="Add task"
                value={taskText}
                onChange={e => { setTaskText(e.target.value);}}
            />
            <button onClick={() => {
                setTaskList([...taskList, { id: nextTaskId, name: taskText }]);
                setNextTaskId(nextTaskId + 1);
            }}>
                Add
            </button>
            <TaskList list={taskList} />
            {/* AKR concept of context */}
            <Section>
                <Heading>title</Heading>
                <Section>
                    <Heading>Head</Heading>
                    <Section>
                        <Section>
                            <Section>
                                <Heading>karim</Heading>
                                <Section>
                                    <Heading>karim</Heading>
                                    {/* <Section>
                                        <Heading>karim</Heading>
                                    </Section> */}
                                </Section>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </Section>
            {/* AKR concept of context */}
            



        </>
    );
}

export default StateMgtDemo;