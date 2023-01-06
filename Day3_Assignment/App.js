import ReactDOM from "react-dom/client";
import flipkart_logo from "./images/flipkart_image.png";
import searchIcon from "./images/loupe.png";

// Flipkart Logo Component
const Logo = () => {
  return <img className="imgTag" src={flipkart_logo} alt="Flipkart Logo" />;
};

//Search Bar Componet
const SearchBar = () => {
  return (
    <input
      className="searchBar"
      type="text"
      placeholder="Search for products, brands and more"
    />
  );
};

const searchButton = (
  <button className="SearchButton">
    <img src={searchIcon} alt="icon Image"></img>
  </button>
);

// This is Menu List
const MenuComponent = () => {
  let arr = ["My Account", "Become a Seller", "More", "Cart"];

  const menuElements = arr.map((elements) => {
    return <li>{elements}</li>;
  });
  return <ul className="UI_List">{menuElements}</ul>;
};

//This is a Main Heaeding component Where our entire Navbar will be present
const HeadingComponent = () => {
  return (
    <div className="container">
      <Logo />
      <SearchBar />
      {searchButton}
      <MenuComponent />
    </div>
  );
};

// Creation of Root and extract it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
