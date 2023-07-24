import logo from "../logo.svg";
import "../App.css";
import Header from "./Header";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Calculator from "./Redux/Calculator";
import calculatorReducer from "./Redux/calculatorReducer";
import DisplayValue from "./Redux/DisplayValue";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
function Redux() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Calculator />
        <DisplayValue />
      </Provider>
    </>
  );
}
export default Redux;
