import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';
import Header from '../Header'


export default function TaskApp() {
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center my-56 pb-56'>
    <TasksProvider>
      <h1>To Do List</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
    </div>
    </>
  );
}
