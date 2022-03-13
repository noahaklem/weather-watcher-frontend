// react
import { Component } from 'react';

// Components
import Navigation from './components/presentational/Navigation';
import Cities from './components/presentational/Cities';
import NewCityForm from './components/presentational/NewCityForm';

// actions
import { addCity } from './actions/addCity';
import { showForm } from './actions/showForm';
import { addForecast } from './actions/addForecast';
import { onStartUp } from './actions/onStartUp';

// redux
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
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
  
  // componentDidMount() {
  //   if (localStorage.getItem('jwt')) {
  //     this.props.dispatch(onStartUp(localStorage.getItem('jwt')))
  //   } 
  // }

  render () {
    return (
      <>
        <Navigation name={ this.props.name } isLoggedIn={ this.props.isLoggedIn } onClick={ this.handleOnToggle } />
        <NewCityForm showForm={ this.props.showForm} onClick={ this.handleOnToggle } onSubmit={ this.handleOnSubmit } onChange={ this.handleOnChange } city={ this.state.city }/>
        <Cities requesting={ this.props.requesting } cities={ this.props.cities } forecasts={ this.props.forecast }/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    isLoggedIn: state.username.isLoggedIn,
    name: state.username.username,
    requesting: state.forecasts.requesting,
    forecast: state.forecasts,
    cities: state.cities,
    showForm: state.showForm,
  };
};

// if I wanted to just call the action by name in the event handlers
// I can do that here with mapDispatchToProps

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCity: (city) => {
//       dispatch(addCity(city))
//     }
//   };
// };

export default connect(mapStateToProps)(App);