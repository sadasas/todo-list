import React from "react";
import { useAppSelector } from "../../app/hooks";
import style from "./ViewUser.module.css";

function ViewUser() {
  const userList = useAppSelector((state) => state.user.value);

  return (
    <div className={style.UserList}>
      {userList.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
    </div>
  );
}

export default ViewUser;
