import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Calculator from "./Redux/Calculator";
import calculatorReducer from './Redux/calculatorReducer';
import DisplayValue from "./Redux/DisplayValue";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

// console.log(store);
function Redux(){
    return(
      //   <>
      //   <Header/>
      //   <div className="App">
      //   <header className="App-header">
      //   {/* <img
      //       src={logo}
      //       className={
      //         "App-logo" +
      //         (this.props.rotating ? "":"App-logo-paused")
      //       }
      //       alt="logo"
      //       onClick={
      //         () => this.props.rotateAction(!this.props.rotating)
      //       }
      //     /> */}
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      // </>
      <>
      <Header/>
      <Provider store={store}>
      <Calculator />
      <DisplayValue />
    </Provider>
    </>
    )
}
export default Redux;