import { NavLink } from "react-router-dom";
import Button from './Button';


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