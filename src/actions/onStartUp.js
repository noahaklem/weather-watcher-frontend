export const onStartUp = (token) => {
  const baseURL = 'http://localhost:3000/api/v1'
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }

  return (dispatch) => {
    dispatch({ type: 'START_LOGGING_IN_USER' });
    fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: headers,
    }).then(res => res.json())
    .then(user => {
      localStorage.setItem('jwt', user.jwt);
      // get localStorage.getItem('jwt')
      // remove localStorage.removeItem('jwt')
      // clear all localStorage.clear();
      dispatch({ type: 'LOGIN_USER', user });
    });
  }
}