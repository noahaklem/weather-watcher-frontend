// redux
import { connect } from 'react-redux';

const Logout = () => {
  return (
    <button className="add-a-city" >
      Logout
    </button>
  ) 
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.username.isLoggedIn,
  }
}

export default connect(mapStateToProps)(Logout);