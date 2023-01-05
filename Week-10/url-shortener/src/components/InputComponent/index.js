import "./styles.css";

function InputComponent(props) {
  let labelClass, labelMsg;
  let inputClass;
  if (props.inputValue !== "" && props.inputValidte === false) {
    labelClass = "label-invalid";
    labelMsg = "Enter URL Is Invalid !";

    inputClass = "input-invalid";
  } else if (props.inputValue !== "" && props.inputValidte === true) {
    labelClass = "label-valid";
    labelMsg = "Enter URL Is Valid !";

    inputClass = "input-valid";
  } else {
    labelClass = "";
    labelMsg = "";
    inputClass = "";
  }

  return (
    <>
      <input
        type="text"
        className={`input ${inputClass}`}
        placeholder="Enter Url To Shorten"
        onChange={props.inputChange}
        value={props.inputValue}
      />
      <label className={labelClass}>{labelMsg}</label>
    </>
  );
}

export default InputComponent;
