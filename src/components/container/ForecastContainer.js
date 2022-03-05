import React from "react";
import City from '../presentational/City'

class ForecastContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      forecasts: []
    }
  }


  render(){
    return (
      <div className="forecast-container">
        <City />
      </div>
    )
  }
}

export default ForecastContainer;