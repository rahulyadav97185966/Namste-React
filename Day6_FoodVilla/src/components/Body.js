import { useState, useEffect } from "react";
import { RestroCardDetails } from "../config";
import RestroCard from "./RestroCard";
import Shimmar from "./Shimmar";

function filterData(searchText, restaurants) {
  const filterdata = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterdata;
}

const Body = () => {
  // const searchText = "KFC";
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // to maintain the list of restaurant

  useEffect(() => {
    //API CAll
    getRestaurants();
    console.log("useEffect");
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8779714&lng=75.3488766&page_type=DESKTOP_WEB_LISTING"
    ); //this will return readable string will convert this readable stringto json
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  if (!allRestaurants) return null;

  //conditional Rendering
  // if restaurant is empty => Shimmer UI
  // if data is there => actual data
  return allRestaurants.length === 0 ? (
    <Shimmar />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="RestroCart">
        {filteredrestaurants.map((restaurant) => {
          return <RestroCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
//   This file is names as Body.jsx beacause it's react file we can write .js no issues or if code in typescript we can write .tsx or .ts
