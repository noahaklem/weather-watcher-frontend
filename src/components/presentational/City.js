import React from 'react';
import CityName from './CityName';
import Forecast from './Forecast';

const City = (props) => (
  <div className="city-container">
    <CityName />
    <Forecast />
  </div>
)

export default City;