// react
import { NavLink } from "react-router-dom";

// components
import Button from './Button';
import Logout from "./Logout";

const Navigation = ({name, onClick, isLoggedIn, logout}) => {
  if (isLoggedIn) {
    return (
    <nav className="navigation-container">
      <div className="greeting-container" >
        <Logout logout={ logout } />
        <h3>Welcome, { name }!</h3>
      </div>
      <Button onClick={ onClick }/>
    </nav>
    )
  }

  return (
    <nav className="navigation-container">
      <NavLink to="/signup" exact >
        SignUp 
      </NavLink >
      ||
      <NavLink to='/login' exact >
       Login
      </NavLink>
      
      <Button onClick={ onClick }/>
    </nav>
  )
}

export default Navigation;