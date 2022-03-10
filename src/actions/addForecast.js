export const addForecast = (city) => {
  return {
    type: 'ADD_FORECAST',
    city: city
  }
}