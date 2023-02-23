import React from "react";
import AddTodo from "./components/todo/AddTodo";
import ViewTodo from "./components/todo/ViewTodo";

function App() {
  return (
    <section id="todo">
      <div className="title">TODO APPS</div>
      <AddTodo />
      <ViewTodo />
    </section>
  );
}

export default App;
