import CityCard from "./CityCard";
import ForecastCard from "./ForecastCard";

function Cities({ cities, forecasts}) {
  if (forecasts.requesting) {
    return (
      <div className="container">
        <div className="requesting-container">
          <p>JUST ONE SEC, I'M LOADING</p>
        </div>
      </div>
      
    )
  }
  
  const cityCards = cities.map((city) => (
    <CityCard key={ city } city={ city }/>
  ));

  const forecastCards = forecasts.forecasts.map((forecast) => (
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