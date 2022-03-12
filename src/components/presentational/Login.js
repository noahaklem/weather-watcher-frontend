export const Login = () => {
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <label htmlFor="password">Password</label>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
}