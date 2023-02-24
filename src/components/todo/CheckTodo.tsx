import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../features/todos";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { useAppSelector } from "../../app/hooks";

function CheckTodo({ index }: { index: number }) {
  const dispatch = useDispatch();
  const isChecked = useAppSelector((state) => state.todo.value[index].finished);
  const checkToggle = () => {
    dispatch(updateTodo({ value: { id: index }, type: "CHECK" }));
  };

  let checkBtn;
  if (isChecked) checkBtn = <ImCheckboxChecked />;
  else checkBtn = <ImCheckboxUnchecked />;

  return <h2 onClick={checkToggle}>{checkBtn}</h2>;
}

export default CheckTodo;
