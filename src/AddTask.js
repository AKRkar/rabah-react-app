import {useEffect ,useState} from "react";


export default function AddTask ({onAdd}) {
    const [taskText, setTaskText] = useState('');
    useEffect( () => {
        console.log("init effect....")
    }, [])
    useEffect( () => {
        console.log("taskText is changing..." + taskText)
    }, [taskText])
    return(
        <>
            <input
                placeholder="Add task"
                value={taskText}
                onChange={e =>  {setTaskText(e.target.value)}}
            />
            <button 
                onClick={() => {
                    onAdd(taskText);
            }}>
            Add
            </button>
        </>
    );
}


