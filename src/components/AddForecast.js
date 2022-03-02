import { Component } from 'react';

class AddForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city_name: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const forecast = this.state;
    this.props.addForecast(forecast)
    this.setState({
      city_name: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={ this.handleOnSubmit }>
        <label htmlFor='city_name'>City Name:</label>
        <input 
          type="text"
          name="city_name"
          value={this.state.city_name}
          onChange={this.handleOnChange}
          placeholder="City Name"/>
        <button>Add Forecast</button>
      </form>
    )
  }
}
export default AddForecast;