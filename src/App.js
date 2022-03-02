import { Component } from 'react';
import TodaysForecast from './components/TodaysForecast';
import TodaysDetails from './components/TodaysDetails';
import ForecastService from './services/ForecastService';
import AddForecast from './components/AddForecast';

class App extends Component {
  constructor() {
    super();
    this.state = {
      forecasts: []
    }
  }

  addForecast = forecast => {
    ForecastService.createForecast(forecast).then(forecast => this.setState({
      ...this.state.forecasts,
      forecasts: forecast
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
          {/* <Navigation /> */}
          <AddForecast addForecast= { this.addForecast }/>
        </div>
        <div className='todays-forecast'>
          <TodaysForecast />
          <TodaysDetails />
        </div>
        <div className='future-forecast'>
          {/* <FutureForecast /> */}
        </div>
      </div>
    );
  }
}

export default App;