import React from "react";

class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;