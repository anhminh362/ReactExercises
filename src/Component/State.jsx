import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
function State() {
  const todos = useSelector((state) => state.todoList);
  // console.log(todos);
  return (
    <>
      <Header />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
export default State;
