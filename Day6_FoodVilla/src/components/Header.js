import { useState } from "react";

export const Title = () => (
  <a href="/">
    <h1 key="h1">Swiggy</h1>
  </a>
);
export const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <li key="home">Home</li>
          <li key="About">About</li>
          <li key="Contact Us">Contact Us</li>
          <li key="Cart">Cart</li>
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
