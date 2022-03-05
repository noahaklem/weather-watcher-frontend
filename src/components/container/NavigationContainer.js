import React from "react";
import AddCity from "../presentational/AddCity";
import SignUp from "../presentational/SignUp";
import SignIn from "../presentational/SignIn";

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: [],
    }
  }

  handleOnClick = (event) => {
    // need to figure out how to forward to form component
    alert('you click this button. State is: ' + this.state.city)
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
    this.props.addForecast(city);
    this.setState({
      city: ''
    })
  }

  render() {
    return (
      <div className="navigation-container">
        <SignUp />
        <SignIn />
        <AddCity 
          city={ this.state.city }
          onClick={ this.handleOnClick }
          onChange={ this.handleOnChange }
          onSubmit={ this.handleOnSubmit }
          addForecast= { this.props.addForecast }
        />
      </div>
    )
  }
}

export default NavigationContainer;