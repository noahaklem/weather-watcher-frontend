import { NavLink } from "react-router-dom";
import Button from './Button';


const Navigation = ({onClick, isLoggedIn}) => {
  if (isLoggedIn) {
    return (
    <nav className="navigation-container">
      <div>
        <p>Hey there!</p>
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
      <NavLink to="/login" exact >
       Login
      </NavLink>
      
      <Button onClick={ onClick }/>
    </nav>
  )
}

export default Navigation;