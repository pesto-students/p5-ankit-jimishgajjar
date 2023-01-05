import "./styles.css";

function ShortedUrl(props) {
  return (
    <>
      {!props.urlData ? (
        <>
          <div className="shorted-link-blank">
            <h3>
              {props.loading ? (
                <i
                  className="fa fa-refresh fa-spin"
                  style={{ marginRight: "5px" }}
                />
              ) : (
                <span>Enter Url To Short</span>
              )}
            </h3>
          </div>
        </>
      ) : (
        <>
          <div className="shorted-link">
            <h4>{props.urlData.original_link}</h4>
            <h4>{props.urlData.short_link}</h4>
            <button onClick={props.onCopy}>
              {props.textCopy ? "Copied 👍!" : "Copy"}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default ShortedUrl;
