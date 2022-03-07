import React from 'react';
import CityName from './CityName';
import Forecast from './Forecast';

const City = ({forecasts}) => (
  <div className="city-container">
    <CityName forecasts={ forecasts } />
    <Forecast forecasts={ forecasts } />
  </div>
  
)

export default City;