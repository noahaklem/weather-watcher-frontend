import { Component } from 'react';
import Navigation from './components/presentational/Navigation';
import Cities from './components/presentational/Cities';

import NewCityForm from './components/presentational/NewCityForm';
import ForecastService from './services/ForecastService';
import NavigationContainer from './components/container/NavigationContainer';
import ForecastContainer from './components/container/ForecastContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showForm: true,
      city: '',
      cities: [],
      forecasts: []
    }
    this.handleOnToggle = this.handleOnToggle.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnToggle() {
    this.setState(previousState => {
      return {
        ...previousState,
        showForm: !this.state.showForm
      }
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const city = this.state.city;
    this.setState( previousState => {
      return {
        city: '',
        cities: [...previousState.cities, city]
      }
    })
    this.addForecast(city);
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  addForecast = city => {
    ForecastService.createForecast(city).then(forecast => this.setState(previousState => {
      return {
        forecasts: [...previousState.forecasts, forecast]
      }
    }))
  }
  
  // componentDidMount() {
  //   ForecastService.getForecast().then(forecasts => this.setState({ forecasts })
  //   )
  // }

  render () {
    console.log(this.state.forecasts)
    return (
      <>
        <Navigation onClick={ this.handleOnToggle }/>
        <NewCityForm showForm={ this.state.showForm } onClick={ this.handleOnToggle } onSubmit={ this.handleOnSubmit } onChange={ this.handleOnChange } city={ this.state.city }/>
        <Cities cities={ this.state.cities } forecasts={ this.state.forecasts }/>
      </>
      
      // <div className='app'>
      //   <div className='navigation'>
      //     <NavigationContainer onClick= { this.handleOnClick } onSubmit= { this.handleOnSubmit } />
      //   </div>
      //   <div className='forecast-container'>
      //     <ForecastContainer forecasts={ this.state.forecasts }/>
      //   </div>
      // </div>
    );
  }
}

export default App;