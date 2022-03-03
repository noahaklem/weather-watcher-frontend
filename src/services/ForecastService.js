const baseURL = 'http://localhost:3000/api/v1'
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

const ForecastService = {
  getForecast() {
    return fetch(`${baseURL}/forecasts`).then(res => res.json());
  },

  createForecast(body) {
    return fetch(`${baseURL}/forecasts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
}

export default ForecastService;