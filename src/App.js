import React, { Component } from "react";
import { FormControl, FormGroup, Button } from "react-bootstrap";
const marked = require("marked");
class App extends Component {
  state = {
    content: ""
  };

  render() {
    let { content } = this.state;

    return (
      <div className="markdownApp">
        <div>
          <FormGroup>
            <FormControl
              id="inputArea"
              rows="25"
              componentClass="textarea"
              onChange={e => this.setState({ content: e.target.value })}
            />
          </FormGroup>
          <Button
            bsStyle="danger"
            block
            onClick={e => this.setState({ content: "" })}
          >
            Clear All
          </Button>
        </div>
        <div
          className="output"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    );
  }
}

export default App;
