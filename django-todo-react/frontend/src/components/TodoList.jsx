import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} />
      ))}
    </div>
  );
};

export default TodoList;
