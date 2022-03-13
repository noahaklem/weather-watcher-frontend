export const signUpUser = (body) => {
  const baseURL = 'http://localhost:3000/api/v1'
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  return (dispatch) => {
    dispatch({ type: "START_LOGGING_IN_USER" });
    fetch(`${baseURL}/signup`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user: body})
    }).then(res => res.json())
    .then(user => {
      localStorage.setItem('jwt', user.jwt);
      // get localStorage.getItem('jwt')
      // remove localStorage.removeItem('jwt')
      // clear all localStorage.clear();
      dispatch({ type: 'LOGIN_USER', user });
    });
  };
}