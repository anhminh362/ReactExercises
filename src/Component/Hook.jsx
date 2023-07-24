import React from "react";
import Header from "./Header";

function Hook() {
  // const [hookState, hookDispatch]=useReducer(hookReducer, {Hooks});
  const Hooks = [
    {
      id: 1,
      name: "useState",
    },
    {
      id: 2,
      name: "useEffect",
    },
    {
      id: 3,
      name: "useCallback",
    },
    {
      id: 4,
      name: "useMemo",
    },
    {
      id: 5,
      name: "useContext",
    },
    {
      id: 6,
      name: "useRef",
    },
    {
      id: 7,
      name: "useReducer",
    },
  ];
  return (
    <div>
      <Header />
      <ul className="flex flex-col flex-wrap md:flex-row max-w-screen mx-20 mt-5 p-5 justify-between items-center">
        {Hooks.map((hook) => {
          const id = hook.id;
          if (id === 7) {
            return (
              <li>
                <a href="/useReducer">
                  <button
                    className="bg-blue-200 px-8 rounded py-2 mx-2 my-2"
                    key={hook.name}
                  >
                    {hook.name}
                  </button>
                </a>
              </li>
            );
          } else if (id === 5) {
            return (
              <li>
                <a href="/useContext">
                  <button
                    className="bg-blue-200 px-8 rounded py-2 mx-2 my-2"
                    key={hook.name}
                  >
                    {hook.name}
                  </button>
                </a>
              </li>
            );
          } else
            return (
              <li>
                <button
                  className="bg-blue-200 px-8 rounded py-2 mx-2 my-2"
                  key={hook.name}
                >
                  {hook.name}
                </button>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
export default Hook;
