import CityCard from "./CityCard";
import ForecastCard from "./ForecastCard";

function Cities({ cities, forecasts, requesting }) {
  if (requesting) {
    return (
      <div className="forecasts-container">
        <p>JUST ONE SEC, I'M LOADING</p>
      </div>
    )
  }
  
  const cityCards = cities.map((city) => (
    <CityCard key={ city } city={ city }/>
  ));

  const forecastCards = forecasts.map((forecast) => (
    <ForecastCard forecast={ forecast.data.attributes.daily_weather }/>
  ))

  return (
    <section className="container">
      <div className="city-container">{ cityCards }</div>
      <div className="forecasts-container">{ forecastCards }</div>
    </section>
  )
}

export default Cities;