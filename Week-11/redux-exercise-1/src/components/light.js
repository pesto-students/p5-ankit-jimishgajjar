import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";

function App() {
  document.title = "Redux Exercise 1";
  
  const isLightOn = useSelector((state) => state.isLightOn);
  const dispatch = useDispatch();

  const flipLight = () => {
    dispatch({ type: "SWITCH" });
  };

  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      <span>The Room Is {lightedness}</span>
      <br />
      <br />
      <br />
      <br />
      <button onClick={flipLight} className={isLightOn ? "dark" : "lit"}>
        {isLightOn ? "Off The Light" : "On The Light"}
      </button>
    </div>
  );
}

export default App;
