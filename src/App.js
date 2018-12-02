import React, { Component } from "react";
import "./App.css";
import TextArea from "./TextArea.js";
import Preview from "./Preview.js";
// #1c14b3
// #1d50ba
// #f21754
// #eb3f4f
// #d2b3da
// #4e4953
// #b0b0b0
class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      textarea: {
        width: "60%",
        height: "40vh",
        isVisible: true,
        isExpanded: false
      },
      preview: {
        width: "80%",
        isVisible: true,
        isExpanded: false
      }
    };
  }

  expandTextarea = () => {
    if (!this.state.textarea.isExpanded) {
      this.setState({
        textarea: {
          ...this.state.textarea,
          width: "100%",
          height: "80vh",
          isExpanded: !this.state.textarea.isExpanded
        },
        preview: {
          ...this.state.preview,
          isVisible: !this.state.preview.isVisible
        }
      });
    } else {
      this.setState({
        textarea: {
          ...this.state.textarea,
          width: "60%",
          height: "40vh",
          isExpanded: !this.state.textarea.isExpanded
        },
        preview: {
          ...this.state.preview,
          isVisible: !this.state.preview.isVisible
        }
      });
    }
  };

  expandPreview = () => {
    if (!this.state.preview.isExpanded) {
      this.setState({
        textarea: {
          ...this.state.textarea,
          isVisible: !this.state.textarea.isVisible
        },
        preview: {
          ...this.state.preview,
          width: "100%",
          isExpanded: !this.state.preview.isExpanded
        }
      });
    } else {
      this.setState({
        textarea: {
          ...this.state.textarea,
          isVisible: !this.state.textarea.isVisible
        },
        preview: {
          ...this.state.preview,
          width: "80%",
          isExpanded: !this.state.preview.isExpanded
        }
      });
    }
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const container = { width: "80%", margin: "0 auto" };
    return (
      <div style={container}>
        <TextArea
          value={this.state.value}
          textarea={this.state.textarea}
          expandTextarea={this.expandTextarea}
          handleChange={this.handleChange}
        />
        <Preview
          value={this.state.value}
          preview={this.state.preview}
          expandPreview={this.expandPreview}
        />
      </div>
    );
  }
}

export default App;
