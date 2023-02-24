import { RiDeleteBin6Line } from "react-icons/Ri";
import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../features/todos";

function DeleteTodo({ index }: { index: number }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeTodo({ value: { id: index } }));
  };
  return (
    <h2 onClick={deleteHandler}>
      <RiDeleteBin6Line />
    </h2>
  );
}

export default DeleteTodo;
