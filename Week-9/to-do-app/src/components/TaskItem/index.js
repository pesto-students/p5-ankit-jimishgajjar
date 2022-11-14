import PropTypes from "prop-types";
import { BiCheckDouble, BiPencil, BiX, BiTrash } from "react-icons/bi";

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

  function taskEdit() {
    props.onTaskEdit(props.id);
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
            <div className="div-actions">
              <button className="info" onClick={taskUndo}>
                <BiX />
              </button>
              <button className="danger" onClick={taskDelete}>
                <BiTrash />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="div-actions">
              <button className="warning" onClick={taskEdit}>
                <BiPencil />
              </button>
              <button className="success" onClick={taskComplete}>
                <BiCheckDouble />
              </button>
            </div>
          </>
        )}
      </div>
      {description}
    </li>
  );
};

TaskItem.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onTaskComplete: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskUndo: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired
};

export default TaskItem;
