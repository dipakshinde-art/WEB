import React, { useState } from "react";
import "../App.css";

function TodoInput({ addTodo }) {
  let [value, setValue] = useState("");
  return (
    <div className="input_value">
      <h1>Todo List</h1>
      <input
        className="Input"
        id="inid"
        type="text"
        value={value}
        placeholder="Enter Your Bucket List"
        onChange={(e) => {
          setValue(e.target.value);
          // console.log(e.target.value)
        }}
      />
      <button
        id="todo_add"
        disabled={!value}
        onClick={() => {
          addTodo(value);
          setValue(" ");
        }}
      >
        <svg
          width="1em"
          height="1.5em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="4"
            d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoInput;
