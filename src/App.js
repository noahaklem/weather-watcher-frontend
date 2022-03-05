import { Component } from 'react';
import ForecastService from './services/ForecastService';
import NavigationContainer from './components/container/NavigationContainer';
import ForecastContainer from './components/container/ForecastContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      forecasts: []
    }
  }

  addForecast = city_name => {
    ForecastService.createForecast(city_name).then(forecast => this.setState(previousState => {
      return {
        forecasts: [previousState.forecasts, forecast]
      }
    }))
  }
  
  componentDidMount() {
    ForecastService.getForecast().then(forecasts => this.setState({ forecasts })
    )
  }

  render () {
    console.log(this.state.forecasts)
    return (
      <div className='app'>
        <div className='navigation'>
          <NavigationContainer addForecast={this.addForecast} />
        </div>
        <div className='forecast-container'>
          <ForecastContainer />
        </div>
      </div>
    );
  }
}

export default App;