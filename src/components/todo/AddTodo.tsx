import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../features/todos";
import style from "./AddTodo.module.css";

function AddTodo() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  return (
    <div className={style.addTodo}>
      <input
        type="text"
        placeholder="Todo ..."
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(addTodo({ value: { content } }));
          setContent("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default AddTodo;
