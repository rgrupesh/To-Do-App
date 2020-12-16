import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, checkTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} checkTodo={checkTodo} id={todo.id}/>
      ))}
    </div>
  );
};

export default TodoList;
