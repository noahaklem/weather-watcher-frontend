function ForecastCard({ index, forecast }) {
  const forecastInfo = forecast.map((f) => (
    <div key={index} className="forecast-card">
      <p>{ f.date }</p>
      <p>{f.conditions}</p>
      <div>
        <p>Max Temp:{f.max_temp}</p>
        <p>Low Temp: {f.min_temp}</p>
      </div>
    </div>
  ))
  return (
    <div className="forecast-container">
      { forecastInfo }
    </div>
  )
}

export default ForecastCard;