export const addUser = (body) => {
  const baseURL = 'http://localhost:3000/api/v1'
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // Authorization: `Bearer ${token}`
  }

  return (dispatch) => {
    dispatch({ type: "START_ADDING_USER" });
    fetch(`${baseURL}/users`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({user: body})
    }).then(res => res.json())
    .then(user => dispatch({ type: 'ADD_USER', user }));
  };
}