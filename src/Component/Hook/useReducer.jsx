import { useReducer, useRef } from "react";
import Header from "../Header";
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        company: state.company,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        company: state.company,
        age: state.age,
      };
    }
    default:
      Error("Unknown action.");
  }
}

export default function Counter() {
  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    name: "Cara",
    age: 20,
    company: "DF",
  });
  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }
  const inputFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center my-56 pb-56">
        <div className="flex flex-row items-center">
          <input
            className="border-solid  border-gray-300 border-2 rounded py-1 px-2 mb-5 mr-4"
            value={state.name}
            onChange={handleInputChange}
            ref={inputRef}
          />
          <button
            className=" border-blue-500 border-2  bg-gray-300 text-white rounded mb-4 p-1 px-2 "
            onClick={inputFocus}
          >
            Enter name
          </button>
        </div>

        <button
          className=" bg-blue-700 text-white rounded mb-4 p-2 "
          onClick={() => {
            dispatch({ type: "incremented_age" });
          }}
        >
          Increment age
        </button>
        <p>
          Hello, {state.name}! You are {state.age}.
        </p>
        <p>Welcome to {state.company}</p>
      </div>
    </>
  );
}
