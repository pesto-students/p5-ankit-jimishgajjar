import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BiListPlus } from "react-icons/bi";
import TaskItem from "./TaskItem";
// import ToDoItems from "./../ToDoItems";

class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelVal: "",
      discriptionVal: "",
      todos: props.propsData
    };
  }

  setLabel = (e) => {
    this.setState({
      labelVal: e.target.value
    });
  };

  setDescription = (e) => {
    this.setState({
      discriptionVal: e.target.value
    });
  };

  addTask = () => {
    if (this.state.labelVal !== "") {
      const task = {
        id: uuidv4(),
        label: this.state.labelVal,
        description: this.state.discriptionVal,
        done: false
      };

      const todos = this.state.todos;
      todos.push(task);
      this.setState({
        labelVal: "",
        discriptionVal: ""
      });
    }
  };

  TaskComplete = (itemId) => {
    var updatedItems = this.state.todos.map((item) => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });

    // State Updates are Merged
    this.setState({
      todos: [].concat(updatedItems)
    });
  };

  TaskDelete = (itemId) => {
    var updatedItems = this.state.todos.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({
      todos: [].concat(updatedItems)
    });
  };

  TaskUndo = (itemId) => {
    var updatedItems = this.state.todos.map((item) => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });

    // State Updates are Merged
    this.setState({
      todos: [].concat(updatedItems)
    });
  };

  render() {
    return (
      <>
        <div className="addToDoDiv">
          <input
            type="text"
            className="input"
            placeholder="Add a task"
            value={this.state.labelVal}
            onChange={this.setLabel}
          />
          <textarea
            placeholder="Details of your task "
            className="textarea"
            onChange={this.setDescription}
            value={this.state.discriptionVal}
          ></textarea>
          <button
            type="submit"
            className="btn"
            disabled={this.state.labelVal.length < 1}
            onClick={this.addTask}
          >
            <BiListPlus /> Add task
          </button>
        </div>

        <h4 className="title">Task To Do</h4>
        <ul>
          {this.state.todos.map((item) => {
            if (item.done !== true) {
              return (
                <TaskItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  description={item.description}
                  completed={item.done}
                  onTaskComplete={this.TaskComplete}
                />
              );
            }
          })}
        </ul>
        <h4 className="title">Completed Task</h4>
        <ul>
          {this.state.todos.map((item) => {
            if (item.done === true) {
              return (
                <TaskItem
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  description={item.description}
                  completed={item.done}
                  onTaskUndo={this.TaskUndo}
                  onTaskDelete={this.TaskDelete}
                />
              );
            }
          })}
        </ul>
      </>
    );
  }
}

// InputCompoent.propTypes = {
//   onAddTask: PropTypes.func.isRequired
// };

export default ToDo;
