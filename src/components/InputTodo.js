import React, { useState } from "react";

const InputTodo = ({ addTodoProps }) => {
  const initialState = {
    title: "",
    assignee: ""
  }

  const [todo, setTodo] = useState(initialState)

  const onChange = e => setTodo({ ...todo, [e.target.name]: e.target.value })


  const handleSubmit = e => {
    e.preventDefault();
    addTodoProps(todo)
    setTodo(initialState)
  };


  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={todo.title}
        name="title"
        onChange={onChange}
      />

      <input
        type="text"
        className="input-text"
        placeholder="Assignee"
        value={todo.assignee}
        name="assignee"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  );
}

export default InputTodo;
