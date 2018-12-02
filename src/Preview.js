import React from "react";
import marked from "marked";

function Preview(props) {
  const { width, isVisible, isExpanded } = props.preview;

  const previewBox = { width: width, margin: "0 auto" };

  const heading = {
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

  const preview = {
    padding: "15px",
    border: "1px solid #1c14b3"
  };

  if (isVisible) {
    return (
      <div style={previewBox}>
        <div style={heading}>
          Previewer{" "}
          <span style={expand} onClick={props.expandPreview}>
            {isExpanded ? (
              <i className="fas fa-minus-square" />
            ) : (
              <i className="fas fa-plus-square" />
            )}
          </span>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={createMarkup(props.value)}
          style={preview}
        />
      </div>
    );
  }

  return null;
}

function createMarkup(value) {
  marked.setOptions({
    breaks: true
  });
  return { __html: marked(value) };
}

export default Preview;
