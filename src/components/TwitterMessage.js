import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <label htmlFor="message">{this.props.maxChars - this.state.value.length}</label>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.changeHandler} />
      </div>
    );
  }

  changeHandler = event => {
    this.setState({
      value: event.target.value,
    })
  }
}

export default TwitterMessage;
