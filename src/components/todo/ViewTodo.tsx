import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import DeleteTodo from "./DeleteTodo";
import style from "./ViewTodo.module.css";

function ViewTodo() {
  const todoList = useAppSelector((state) => state.todo.value);
  const [hover, setHover] = useState(false);

  const hoverOff = () => setHover(false);
  const hoverOn = () => setHover(true);
  return (
    <div
      className={style.viewList}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {todoList
        .filter((x) => x.content !== "")
        .map((todo, index) => {
          return (
            <div key={todo.id} className={style.list}>
              <h1 className={style.title}>{todo.content}</h1>
              {hover && <DeleteTodo index={todo.id} />}
            </div>
          );
        })}
    </div>
  );
}

export default ViewTodo;
