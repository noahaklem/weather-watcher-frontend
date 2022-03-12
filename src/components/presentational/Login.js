import react from "react";

// actions
import { addUser } from "../../actions/addUser";

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
    event.preventDefault();
    const user = { username: this.state.username, password: this.state.password }
    this.setState({
      username: '',
      password: '',
    })
    this.props.dispatch(addUser(user))
  }

  render() {
    return (
      <form onSubmit={ this.handleOnSubmit }>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  }
}

export default connect(mapStateToProps)(Login);