const ForecastService = {
  getForecast: () => {
    return fetch('http://localhost:3000/api/v1/forecasts')
    .then(res => res.json())
  }
}

export default ForecastService;