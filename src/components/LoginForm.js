import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  handlePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin();
    }
  }
}

export default LoginForm;
