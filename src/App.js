import React from "react";
import "./App.css";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="main-title"> This is my toDo App </h1>
        <h2 className="helper-text">You can add, delete, clear tasks!</h2>
      </header>
      <ToDoContainer />
    </div>
  );
}

export default App;
