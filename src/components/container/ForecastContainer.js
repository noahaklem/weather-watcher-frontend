import React from "react";
import City from '../presentational/City'

const ForecastContainer = ({forecasts}) => (
  <div className="forecast-container">
    <City forecast={ forecasts } />
  </div>
)

export default ForecastContainer;