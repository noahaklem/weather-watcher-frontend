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
    const city_name = this.state;
    this.props.addForecast(city_name)
    this.setState({
      city_name: ''
    })
  }

  render() {
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