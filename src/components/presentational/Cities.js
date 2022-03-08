import CityCard from "./CityCard";
import ForecastCard from "./ForecastCard";

function Cities({ cities, forecasts }) {
  const cityCards = cities.map((city, index) => (
    <CityCard key={ index } city={ city }/>
  ));

  const forecastCards = forecasts.map((forecast, index) => (
    <ForecastCard key={ index } forecast={ forecast.data.attributes.daily_weather }/>
  ))

  return (
    <section className="container">
      <div className="city-container">{ cityCards }</div>
      <div className="forecasts-container">{ forecastCards }</div>
    </section>
  )
}

export default Cities;