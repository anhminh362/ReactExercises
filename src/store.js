// import { legacy_createStore as createStore} from 'redux';
// import rotateReducer from './reducers/rotateReducer';
// import tasksReducer from './Component/Hook/TasksContext'

// // function configureStore(state={rotating: true}){
// //     return createStore(rotateReducer,state);
// // }

// function configureStore(state=initialTasks){
//     return createStore(tasksReducer,state)
// }
// export default configureStore;
// store.js
import { legacy_createStore as createStore } from 'redux'


const INCREASEMENT = 'increasement'
const DECREASEMENT = 'decreasement'

// actions
export const increasement = () => ({ type: increasement })
export const decreasement = () => ({ type: decreasement })

const initialState = { count: 0 }

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASEMENT:
            return { count: state.count + 1 };
            break;
        case DECREASEMENT:
            return { count: state.count - 1 };
            break;
        default:
            return state
    }
}

const store = createStore(rootReducer)

export default store;