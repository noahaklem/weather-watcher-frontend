import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import { Login } from "./Login";
import Button from './Button';


const Navigation = ({ onClick }) => {
  return (
    <nav className="navigation-container">
      <NavLink>
        <SignUp />
      </NavLink>
      <NavLink>
        <Login />
      </NavLink>
      
      <Button onClick={ onClick }/>
    </nav>
  )
}

export default Navigation;