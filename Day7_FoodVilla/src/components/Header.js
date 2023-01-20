import { useState } from "react";
import Swiggy from "../assets/images/swiggy.png";
import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <img className="Logo" src={Swiggy} />
  </a>
);
export const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="About">
            <Link to="/about">About</Link>
          </li>
          <li key="Contact Us">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li key="Cart">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {loggedInUser ? (
        <button
          onClick={() => {
            setLoggedInUser(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setLoggedInUser(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
// export default Header;
