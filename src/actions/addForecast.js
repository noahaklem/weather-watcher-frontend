export const addForecast = (body) => {
  const baseURL = 'http://localhost:3000/api/v1'
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }

  return (dispatch) => {
    dispatch({ type: "START_ADDING_FORECAST" });
    fetch(`${baseURL}/forecasts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({city: body})
    }).then(res => res.json())
    .then(forecast => dispatch({ type: 'ADD_FORECAST', forecast }));
  };
}