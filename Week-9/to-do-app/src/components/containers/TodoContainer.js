import React from "react";
import { v4 as uuidv4 } from "uuid";
import { BiListPlus, BiX } from "react-icons/bi";
import TaskItem from "../TaskItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sound from "../../assests/iphone_message.mp3";
// import ToDoItems from "./../ToDoItems";

const data = [
  {
    id: uuidv4(),
    label: "Metting with client",
    description: "Call the client and fix the meeting",
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
    description: "It's mikes birthday buy some useful gift for him",
    done: false,
  },
];

export default class ToDoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.alertAudio = new Audio(sound);
    this.state = {
      labelVal: "",
      discriptionVal: "",
      todos: data,
      editId: "",
    };
  }

  setLabel = (e) => {
    this.setState({
      labelVal: e.target.value,
    });
  };

  setDescription = (e) => {
    this.setState({
      discriptionVal: e.target.value,
    });
  };

  addTask = () => {
    if (this.state.labelVal !== "") {
      const task = {
        id: uuidv4(),
        label: this.state.labelVal,
        description: this.state.discriptionVal,
        done: false,
      };

      const todos = this.state.todos;
      todos.push(task);
      this.setState({
        labelVal: "",
        discriptionVal: "",
      });

      toast.success("Task added successfully", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  taskComplete = (itemId) => {
    var updatedItems = this.state.todos.map((item) => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });

    this.alertAudio.play();

    // State Updates are Merged
    this.setState({
      todos: [].concat(updatedItems),
    });

    toast.success("Task mark as completed", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  taskDelete = (itemId) => {
    var updatedItems = this.state.todos.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({
      todos: [].concat(updatedItems),
    });

    toast.success("Task deleted sucessfully", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  taskEdit = (itemId) => {
    const todoItemIndex = this.state.todos.findIndex(
      (item) => item.id === itemId
    );
    if (todoItemIndex !== -1) {
      const todo = this.state.todos[todoItemIndex];
      this.setState({
        labelVal: todo.label,
        discriptionVal: todo.description,
        editId: itemId,
      });
    }
  };

  taskCancel = () => {
    this.setState({
      labelVal: "",
      discriptionVal: "",
      editId: "",
    });
  };

  taskUpdate = () => {
    let itemId = this.state.editId;
    const todoItemIndex = this.state.todos.findIndex(
      (item) => item.id === itemId
    );
    if (todoItemIndex !== -1) {
      const todo = this.state.todos[todoItemIndex];
      todo.label = this.state.labelVal;
      todo.description = this.state.discriptionVal;

      this.setState({
        labelVal: "",
        discriptionVal: "",
        editId: "",
      });

      toast.success("Task updated sucessfully", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return todo;
    }
  };

  TaskUndo = (itemId) => {
    var undoItems = this.state.todos.map((item) => {
      if (itemId === item.id) item.done = !item.done;

      return item;
    });

    // State Updates are Merged
    this.setState({
      todos: [].concat(undoItems),
    });
  };

  render() {
    const pendingTasks = this.state.todos.filter((item) => !item.done);
    const completedTasks = this.state.todos.filter((item) => item.done);
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
          <div className="flex">
            <button
              type="submit"
              className="btn"
              disabled={this.state.labelVal.length < 1}
              onClick={!this.state.editId ? this.addTask : this.taskUpdate}
            >
              {!this.state.editId ? (
                <>
                  <BiListPlus /> Add Task
                </>
              ) : (
                <>
                  <BiListPlus /> Update
                </>
              )}
            </button>
            {this.state.editId && (
              <button className="danger" onClick={this.taskCancel}>
                <BiX />
              </button>
            )}
          </div>
        </div>

        <h4 className="title">Task To Do</h4>
        <ul>
          {pendingTasks.map((item) => {
            return (
              <TaskItem
                key={item.id}
                id={item.id}
                label={item.label}
                description={item.description}
                completed={item.done}
                onTaskComplete={this.taskComplete}
                onTaskEdit={this.taskEdit}
              />
            );
          })}
        </ul>
        <h4 className="title">Completed Task</h4>
        <ul>
          {completedTasks.map((item) => {
            return (
              <TaskItem
                key={item.id}
                id={item.id}
                label={item.label}
                description={item.description}
                completed={item.done}
                onTaskUndo={this.TaskUndo}
                onTaskDelete={this.taskDelete}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

// InputCompoent.propTypes = {
//   onAddTask: PropTypes.func.isRequired
// };
