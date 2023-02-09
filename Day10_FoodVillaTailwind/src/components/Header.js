import { useState } from "react";
import Swiggy from "../assets/images/swiggy.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
export const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={Swiggy} />
  </a>
);
export const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between pt-6 bg-pink-50 shadow-md">
      <Title />
      <div>
        <ul className="flex space-x-4 mt-2">
          <li key="home">
            <Link to="/">Home</Link>
          </li>
          <li key="About">
            <Link to="/about">About</Link>
          </li>
          <li key="Contact Us">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li key="Instamart">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li key="Cart">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <h1 className="mt-2">
        {isOnline ? (
          <img
            height="20px"
            width="20px"
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          />
        ) : (
          <img
            height="20px"
            width="20px"
            src="https://cdn-icons-png.flaticon.com/512/980/980401.png"
          />
        )}
      </h1>
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
