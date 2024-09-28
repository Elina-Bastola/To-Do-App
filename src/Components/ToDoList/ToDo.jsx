import React, { useEffect, useRef, useState } from "react";
import TodoList from "../TodoList";

const ToDo = () => {
  const [item, setItem] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setItem((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    setItem((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  const toggle = (id) => {
    setItem((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(item));
  }, [item]);
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white w-11/12  border-gray-600 rounded-lg  place-self-center flex flex-col p-7 max-w-md min-h-[500px] shadow-md">
        <div className="flex items-center md:mt-5 gap-2 my-4 flex-row sm:flex-col">
          <h1 className="text-3xl font-bold text-red-500 justify-center text-center font-serif"> To-Do-List</h1>
        </div>
        <div className="space-x-2  items-center space-y-10 md:justify-between justify-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a task"
            className="text-center border-0 outline-none bg-slate-300 py-4 rounded-full   placeholder:text-slate-400  text-xl"
          />
          <button
            onClick={add}
            className="bg-slate-500 font-bold rounded-md px-4 text-[18px] cursor pointer  py-2   "
          >
            Add Task
          </button>
        </div>
        <div></div>
        <div>
          {item.map((data, index) => {
            return (
              <TodoList
                key={index}
                text={data.text}
                id={data.id}
                isComplete={data.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
