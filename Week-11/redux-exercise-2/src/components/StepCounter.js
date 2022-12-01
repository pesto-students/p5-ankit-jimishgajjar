import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux/actions";

import "./styles.css";

function StepCounter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const counterInc = () => {
    dispatch({ type: actions.STEP_INC });
  };

  const counterReset = () => {
    dispatch({ type: actions.STEP_RESET });
  };

  return (
    <>
      <div className="step-count">
        <h3>You've walked {counter} steps today!</h3>
        <button className="btn btn-add" onClick={counterInc}>
          Add a step
        </button>
        <button className="btn btn-reset" onClick={counterReset}>
          Reset Steps
        </button>
      </div>
    </>
  );
}

export default StepCounter;
