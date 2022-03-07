import React from "react";
import { NavLink } from "react-router-dom";
import AddCity from "../presentational/AddCity";
import SignUp from "../presentational/SignUp";
import SignIn from "../presentational/Login";

class NavigationContainer extends React.Component {
  render() {
    return (
      <div className="navigation-container">
        <NavLink to="/signup" exact onSubmit={ this.props.onSubmit }>
          Sign Up |
        </NavLink>
        <NavLink to="/login" exact >
          | Login
        </NavLink>
        <AddCity onClick={ this.props.onClick }/>
      </div>
    )
  }
}

export default NavigationContainer;