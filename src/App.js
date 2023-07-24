
import Home from './Component/Home';
import State from './Component/State';
import Hook from './Component/Hook';
import Redux from './Component/Redux';
import Counter from './Component/Hook/useReducer';
import TaskApp from './Component/Hook/useContext';
// import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import Calculator from "./Calculator";
// import calculatorReducer from './CalculatorSlice';
// import DisplayValue from "./DisplayValue";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
// import {connect} from 'react-redux';
// import { startAction } from './actions/startAction';
// import { stopAction } from './actions/stopAction';
// const mapStatetoProps = state => ({...state});
// const mapDispatchToProps = dispatch =>({
//   startAction: ()=> dispatch(startAction),
//   stopAction: ()=> dispatch(stopAction)
// })

// const store = configureStore();
function App() {
  return (
    <>
    {/* <h1 className="text-3xl font-bold underline">
    Hello world!
    </h1>
    <div class="grid grid-cols-1 divide-red-400 bg-gray-200 border-solid border-green-500 border-2 divide-y-2">
    <div>01</div>
    <div>02</div>
    <div>03</div>
  </div> */}
   <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path='/state' element={<State/>}/>
        <Route path='/hook' element={<Hook/>}/>
        <Route path='/redux' element={<Redux/>}/>
        <Route path='/useReducer' element={<Counter/>}/>
        <Route path='/useContext' element={<TaskApp/>}/>
          {/* <Route path="users" element={<Users />}>
            <Route path="/" element={<UsersIndex />} />
            <Route path=":id" element={<UserProfile />} />
            <Route path="me" element={<OwnUserProfile />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
</>
  );
}

export default (App);