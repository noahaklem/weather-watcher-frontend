const ForecastCard = ({ forecast }) => {
  const forecastInfo = forecast.map((f) => (
    <div className="forecast-card">
      <div>
        <p>{ f.date }</p>
      </div>
      <div>
        <p>{f.conditions}</p>
      </div>
      <div className="temp-container">
        <div className="max">
          Max Temp:{f.max_temp}
        </div>
        <div className="min">
          Low Temp: {f.min_temp}
        </div>
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