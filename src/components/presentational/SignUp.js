const SignUp = (props) => {
  return (
    <form >
      <h1>Sign Up</h1>
      <label htmlFor="username">Username</label>
      <div>
        <input 
          // onChange={ onChange } 
          type="text" 
          name="username"
          // value={ username }
          placeholder="Username" 
        />
      </div>
      <label htmlFor="password">Password</label>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUp;