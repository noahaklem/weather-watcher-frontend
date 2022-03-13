import react from "react";
// import { useNavigate } from 'react-router-dom';

// components
import App from "../../App";

// actions
import { loginUser } from "../../actions/loginUser";

// redux
import { connect } from 'react-redux';

class Login extends react.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    // let navigate = useNavigate();
    event.preventDefault();
    const user = { username: this.state.username, password: this.state.password }
    this.setState({
      username: '',
      password: '',
    })
    this.props.dispatch(loginUser(user))
    // navigate('../', { replace: true });
  }

  render() {
    if(this.props.isLoggedIn) {
      return (
        <App /> 
      );
    }

    return (
      <div className="form-container">
        <form className="form" onSubmit={ this.handleOnSubmit }>
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <div>
            <input 
              onChange={ this.handleOnChange } 
              type="text" 
              name="username"
              value={ this.state.username } 
              placeholder="Username" 
            />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={ this.handleOnChange }
              value={ this.state.password }
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.username.isLoggedIn,
  }
}

export default connect(mapStateToProps)(Login);