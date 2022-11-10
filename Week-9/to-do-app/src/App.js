import React from "react";
import { v4 as uuidv4 } from "uuid";
import ToDo from "./components/ToDo";
import "./index.css";

const data = [
  {
    id: uuidv4(),
    label: "Metting with client",
    description: "Call the client and fix the metting",
    done: false,
  },
  {
    id: uuidv4(),
    label: "Complete pesto bug",
    description: "Fix bug in login task and perform social login",
    done: true,
  },
  {
    id: uuidv4(),
    label: "Buy gift for friend birthday",
    description: "It mikes birthday buy some usefull gift for him",
    done: false,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: data,
    };
  }

  render() {
    return (
      <div className="main">
        <div className="toDo">
          <h1 className="center">To Do App</h1>
          <ToDo propsData={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
