import React from "react";
import ToDoContainer from "./components/containers/TodoContainer";
import { ToastContainer } from "react-toastify";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="toDo">
          <h1 className="center">To Do App</h1>
          <ToDoContainer />
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default App;
