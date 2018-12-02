import React, { Component } from "react";
import "./App.css";
import TextArea from "./textarea.js";
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
      value: defaultValue,
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

const defaultValue = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
