import React from "react";

const TextArea = props => {
  const { width, height, isVisible, isExpanded } = props.textarea;
  const textareaBox = { textAlign: "center" };
  const textarea = { width: width, height: height };
  const heading = {
    width: width,
    textAlign: "left",
    margin: "20px auto 0",
    background: "linear-gradient(30deg, #1c14b3, #1d50ba)",
    color: "white",
    fontSize: "24px",
    fontWeight: "700",
    height: "60px",
    lineHeight: "60px",
    padding: "0 15px"
  };
  const expand = {
    cursor: "pointer",
    display: "inline-block",
    float: "right"
  };

  if (isVisible) {
    return (
      <div style={textareaBox}>
        <div style={heading}>
          Editor
          <span style={expand} onClick={props.expandTextarea}>
            {isExpanded ? (
              <i className="fas fa-minus-square" />
            ) : (
              <i className="fas fa-plus-square" />
            )}
          </span>
        </div>
        <textarea
          style={textarea}
          id="editor"
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
    );
  }

  return null;
};

export default TextArea;
