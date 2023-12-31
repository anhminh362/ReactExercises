import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

function Search() {
  const todos = useSelector((state) => state.todoList);
  const [searchInfo, setSearchInfo] = useState("");
  const [todoList, setTodoList] = useState([]);
  console.log(searchInfo);
   const handleChange = async (e) => {
  
    const inputValue = await e.target.value;
    setSearchInfo(inputValue);
    // console.log(1);
    // callbackFuction();
  };

  const callbackFuction = useCallback(() => {
    console.log('searchinfo',searchInfo);
    const filter = todos.filter((todo) =>
      todo.text.toLowerCase().startsWith(searchInfo.toLowerCase())
    );
    if (filter!==[]) {
      setTodoList(filter);
      console.log(11, filter);
    } else {
      setTodoList([]);
      console.log(22);
    }
  }, [searchInfo]);
  useEffect(()=>{
    callbackFuction();
  },[callbackFuction])
  return (
    <div>
      <input
        value={searchInfo}
        onChange={handleChange}
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        required
      />
      {/* Hiển thị danh sách todo */}
      {searchInfo && todoList.map((todo) => {
        return (
            <div className="todo" key={todo.id}>
          <p>{todo.text}</p>
        </div>
        )
        
      })}
    </div>
  );
}

export default Search;
