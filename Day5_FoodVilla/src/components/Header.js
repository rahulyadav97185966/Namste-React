export const Title = () => (
  <a href="/">
    <h1 key="h1">Swiggy</h1>
  </a>
);
export const Header = () => {
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
    </div>
  );
};
// export default Header;
