import PropTypes from "prop-types";
import { BiCheckDouble, BiX, BiTrash } from "react-icons/bi";

const TaskItem = (props) => {
  const taskComplete = () => {
    props.onTaskComplete(props.id);
  };

  function taskDelete() {
    props.onTaskDelete(props.id);
  }

  function taskUndo() {
    props.onTaskUndo(props.id);
  }

  let description;
  if (props.description) {
    description = <p>{props.description}</p>;
  }

  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="label">
        <label>{props.label}</label>
        {props.completed ? (
          <>
            <button
              className="delete"
              onClick={taskUndo}
              style={{ marginRight: "10px", backgroundColor: "#084298" }}
            >
              <BiX />
            </button>
            <button className="delete" onClick={taskDelete}>
              <BiTrash />
            </button>
          </>
        ) : (
          <button className="done" onClick={taskComplete}>
            <BiCheckDouble />
          </button>
        )}
      </div>
      {description}
    </li>
  );
};

TaskItem.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default TaskItem;
