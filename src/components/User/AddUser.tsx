import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../../features/user";
import style from "./AddUser.module.css";

function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className={style.addUser}>
      <input
        type="text"
        placeholder="Name ..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Username ..."
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <button
        onClick={() => {
          console.log(name);
          dispatch(addUser({ value: { name: name, username: username } }));
        }}
      >
        Add User
      </button>
    </div>
  );
}

export default AddUser;
