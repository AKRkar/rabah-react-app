import {useEffect ,useState} from "react";


export default function AddTask ({onAdd}) {
    const [taskText, setTaskText] = useState('');

    return(
        <>
            <input placeholder="Add task" value={taskText}
                onChange={e =>  {setTaskText(e.target.value)}}
            />
            <button 
                onClick={() => {
                    setTaskText('');
                    onAdd(taskText);
            }}>
            Add
            </button>
        </>
    );
}


