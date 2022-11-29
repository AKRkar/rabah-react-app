import {useState} from "react";


export default function AddTask ({onAdd}) {
    const [taskText, setTaskText] = useState('');
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



// import {useState} from 'react';

// export default function AddTask({onAddTask}) {
//   const [text, setText] = useState('');
//   return (
//     <>
//       <input
//         placeholder="Add task"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setText('');
//           onAddTask(text);
//         }}>
//         Add
//       </button>
//     </>
//   );
// }
