// import { legacy_createStore as createStore} from 'redux';
// import rotateReducer from './reducers/rotateReducer';
// import tasksReducer from './Component/Hook/TasksContext'

// // function configureStore(state={rotating: true}){
// //     return createStore(rotateReducer,state);
// // }
// const initialTasks = [
//     { id: 0, text: 'Get up', done: true },
//     { id: 1, text: 'Write report', done: false },
//     { id: 2, text: 'Drink matcha', done: false }
//   ];
  
// function configureStore(state=initialTasks){
//     return createStore(tasksReducer,state)
// }
// export default configureStore;
// store.js
import { legacy_createStore as createStore } from 'redux'
  
   const initialState = [
    { id: 0, text: 'Get up', done: true },
    { id: 1, text: 'Write report', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ];
  
// const INCREASEMENT = 'increasement'
// const DECREASEMENT = 'decreasement'

// actions
// export const increasement = () => ({ type: increasement })
// export const decreasement = () => ({ type: decreasement })

// const initialState = { count: 0 }

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'added': {
          return [...state, {
            id: action.id,
            text: action.text,
            done: false
          }];
        }
        case 'changed': {
          return state.map(t => {
            if (t.id === action.task.id) {
              return action.task;
            } else {
              return t;
            }
          });
        }
        case 'deleted': {
          return state.filter(t => t.id !== action.id);
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
      }
}

const store = createStore(rootReducer)

export default store;