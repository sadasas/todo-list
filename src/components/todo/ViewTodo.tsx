import React from "react";
import { useAppSelector } from "../../app/hooks";
import style from "./ViewTodo.module.css";

function ViewTodo() {
  const todoList = useAppSelector((state) => state.todo.value);

  return (
    <div className={style.viewList}>
      {todoList
        .filter((x) => x.content !== "")
        .map((todo) => {
          return (
            <div key={todo.id} className={style.list}>
              <h1 className={style.title}>{todo.content}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default ViewTodo;
