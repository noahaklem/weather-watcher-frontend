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
    console.log(this.state)
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const city = this.state.city;
    // this.addForecast(city);
    this.setState( previousState => {
      return {
        ...previousState,
        city: '',
        cities: [city]
      }
    })
    console.log(this.state)
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  // handleFetch = () => {
  //   console.log("its time to fetch stuff")
  // }

  // addForecast = city_name => {
  //   ForecastService.createForecast(city_name).then(forecast => this.setState(previousState => {
  //     return {
  //       forecasts: [previousState.forecasts, forecast]
  //     }
  //   }))
  // }
  
  // componentDidMount() {
  //   ForecastService.getForecast().then(forecasts => this.setState({ forecasts })
  //   )
  // }

  render () {
    return (
      <>
        <Navigation onClick={ this.handleOnToggle }/>
        <NewCityForm showForm={ this.state.showForm } onClick={ this.handleOnToggle } onSubmit={ this.handleOnSubmit } onChange={ this.handleOnChange }/>
        <Cities />
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