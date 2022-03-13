// redux
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';

const Logout = ({ logout }) => {
  // const history = useHistory();

  // function handleClick() {
  //   history.push('/')
  // }

  return (
    <button className="add-a-city" onClick={ logout }>
      Logout
    </button>
  ) 
}

// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.username.isLoggedIn,
//   }
// }

export default connect()(Logout);


// {showForm: {…}, cities: Array(0), forecasts: {…}, username: {…}}
// cities: []
// forecasts: {forecasts: Array(0), requesting: false}
// showForm: {showForm: true}
// username: {username: 'noah', isLoggedIn: true}
// [[Prototype]]: Object