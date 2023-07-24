import { useState, useContext } from 'react';
import { useTasksDispatch } from './TasksContext.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <div className='flex'>
      <input
        className='border-solid  border-gray-300 border-2 rounded py-1 px-2 mb-5 mr-4'
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button 
      className=' border-blue-500 border-2  bg-gray-300 text-white rounded mb-4 p-1 px-2 '
      onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
    </div>
  );
}

let nextId = 3;
