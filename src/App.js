import Home from "./Component/Home";
import State from "./Component/State";
import Hook from "./Component/Hook";
import Redux from "./Component/Redux";
import Counter from "./Component/Hook/useReducer";
import TaskApp from "./Component/Hook/useContext";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/useReducer" element={<Counter />} />
        <Route path="/useContext" element={<TaskApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
