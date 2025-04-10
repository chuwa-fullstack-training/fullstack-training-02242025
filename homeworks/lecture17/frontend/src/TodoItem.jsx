import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <li>
      {todo.task} <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
