import React from "react";
import TodoItem from "./TodoItem";
import styles from "./todo.module.css";
function TodoList({ todos, children }) {
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
  // {/* {todos.map((todo) => {
  //   return <li>{todo}</li>;
  // })} */}
}

export default TodoList;
