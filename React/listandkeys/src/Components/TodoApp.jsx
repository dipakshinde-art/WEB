import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

function TodoApp() {
  let [todos, setTodos] = useState([]);

  const addTodo = (listtodo) => {
    setTodos([...todos, { value: listtodo, id: uuidv4() }]);
    // console.log(todos,listtodo);
  };

  const onDelete = (value) => {
    let d_todo = todos.filter((todo) => todo !== value);
    setTodos(d_todo);
    // console.log(d_todo);
  };
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} value={todo.value} todo={todo} onDelete={onDelete} />
        ))}
      </TodoList>
    </div>
  );
}

export default TodoApp;
