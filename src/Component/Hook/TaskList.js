import { useState, useContext } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  console.log(tasks);
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button className=' border-blue-500 border-2  bg-gray-300 text-white rounded mb-4 p-1 px-2 ml-3  ' onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    if(task.done){
        var check=<p class="line-through">{task.text}</p>
    }
    else check= <>{task.text}</>
    taskContent = (
      <>
        {check}
        <button className=' border-blue-500 border-2  bg-gray-300 text-white rounded mt-1 p-1 px1 ml-5 ' onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label className='flex flex-row items-center'>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button  className=' border-blue-500 border-2  bg-gray-300 text-white rounded  mt-1 p-1 px-1 ml-3  ' onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </button>
    </label>
  );
}
