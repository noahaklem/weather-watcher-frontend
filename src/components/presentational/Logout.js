// redux
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import App from '../../App';
// import { useHistory } from 'react-router-dom';

const Logout = (props) => {
  
  return (
    <button className="add-a-city" onClick={ props.logout }>
      Logout
    </button>
  ) 
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLoggedIn: state.username.isLoggedIn,
  }
}

export default connect(mapStateToProps)(Logout);


// {showForm: {…}, cities: Array(0), forecasts: {…}, username: {…}}
// cities: []
// forecasts: {forecasts: Array(0), requesting: false}
// showForm: {showForm: true}
// username: {username: 'noah', isLoggedIn: true}
// [[Prototype]]: Object