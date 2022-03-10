import { Component } from 'react';

// Components
import Navigation from './components/presentational/Navigation';
import Cities from './components/presentational/Cities';
import NewCityForm from './components/presentational/NewCityForm';
import ForecastService from './services/ForecastService';

import NavigationContainer from './components/container/NavigationContainer';
import ForecastContainer from './components/container/ForecastContainer';

// actions
import { addCity } from './actions/addCity';
import { showForm } from './actions/showForm';
import { addForecast } from './actions/addForecast';
// redux
import { connect } from 'react-redux';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      city: '',
      forecasts: []
    }
  }

  handleOnToggle = () => {
    this.props.dispatch(showForm());
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const city = this.state.city;
    this.props.dispatch(addCity(city));
    this.setState({
      city: ''
    })
    this.props.dispatch(addForecast(city));
  }



  // addForecast = city => {
  //   ForecastService.createForecast(city).then(forecast => this.setState(previousState => {
  //     return {
  //       forecasts: [...previousState.forecasts, forecast]
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
        <NewCityForm showForm={ this.props.showForm } onClick={ this.handleOnToggle } onSubmit={ this.handleOnSubmit } onChange={ this.handleOnChange } city={ this.state.city }/>
        <Cities cities={ this.props.cities } forecasts={ this.props.forecasts }/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.forecasts)
  return { 
    forecasts: state.forecasts,
    cities: state.cities,
    showForm: state.showForm 
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCity: (city) => {
//       dispatch(addCity(city))
//     }
//   };
// };

export default connect(mapStateToProps)(App);