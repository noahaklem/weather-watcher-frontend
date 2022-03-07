import { NavLink } from "react-router-dom";
import Button from './Button';
import SignUp from "./SignUp";
import Login from "./Login";

function Navigation({ onClick }) {
  return (
    <nav className="navigation-container">
      {/* <SignUp />
      <Login /> */}
      <Button onClick={ onClick }/>
    </nav>
  )
}

export default Navigation;