import React from "react";
import { MdDelete } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
const TodoList = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      onClick={() => {
        toggle(id);
      }}
      className="items-center flex my-4 gap-3"
    >
      <div className="flex gap-2 items-center cursor-pointer shadow-md p-2 border-2 border-gray-500 rounded-full hover:scale-105 transition-all duration-500">
        <TiTickOutline
          className={`border-1 rounded-full w-6 h-6 ${
            isComplete ? " bg-red-500"  : "bg-green-500"
          }`}
        />
        <p
          className={`text-black text-[18px] ${
            isComplete ? "line-through text-red-500" : ""
          }`}
        >
          {text}
        </p>
        <MdDelete
          onClick={() => {
            deleteTodo(id);
          }}
          className=" w-6 h-6 "
        />
      </div>
      <div></div>
    </div>
  );
};

export default TodoList;
