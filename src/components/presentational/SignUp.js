import React from "react";

function SignUp(props) {
  return (
    <form >
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Username" />
      <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUp;