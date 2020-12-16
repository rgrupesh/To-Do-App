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

  const checkTodo = (id) => {
    console.log(id)
  }

  const addTodo = (text) => {
    const newTodo = {
      id: 3,
      title: text,
      isCompleted: false
    }
    setTodos([...todos, newTodo])
  }
  return (
    <div>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} checkTodo={checkTodo}/>
    </div>
  );
}

export default App;
