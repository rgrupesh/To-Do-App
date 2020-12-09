import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Software Eng. Internship",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Research Internship",
      isCompleted: false,
    }
  ])
  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
