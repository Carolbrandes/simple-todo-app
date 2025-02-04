import React from "react";

const TodoItem = ({ todo: { completed, id, title, assignee }, handleChangeProps, deleteTodoProps }) => {

  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through"
  };


  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button onClick={() => deleteTodoProps(id)}>Delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
      <p>Assignee to {assignee}</p>
    </li>
  );
}


export default TodoItem;
