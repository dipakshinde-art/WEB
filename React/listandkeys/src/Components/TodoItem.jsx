import React from "react";
import styles from "./todo.module.css";
const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className={styles.list}>
     <p className={styles.pval}>{todo.value} </p> 
      <button className={styles.delete} onClick={() => onDelete(todo)}>Delete</button>
    </li>
  );
};

export default TodoItem;
