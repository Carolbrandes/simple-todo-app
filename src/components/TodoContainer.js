import React, { useState } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {

  const initialTodos = [
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
      assignee: 'Marie'
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
      assignee: 'John'
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
      assignee: 'Joana'
    },
  ]

  const [todos, setTodos] = useState(initialTodos)


  const handleChange = (id) => {
    const editingTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    setTodos(editingTodos)

  };

  const delTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id))


  const addTodoItem = ({ title, assignee }) => {
    const newTodo = {
      // id: uuid.v4(),
      id: uuidv4(),
      title,
      assignee,
      completed: false,
    };

    setTodos([...todos, newTodo])

  };


  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );
}

export default TodoContainer;
