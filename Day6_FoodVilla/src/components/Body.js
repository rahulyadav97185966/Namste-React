import { useState } from "react";
import { RestroCardDetails } from "../config";
import RestroCard from "./RestroCard";

const Body = () => {
  // const searchText = "KFC";

  const [searchText, setSearchText] = useState("KFC");
  // to maintain the list of restaurant
  const [restaurants, setRestaurants] = useState(RestroCardDetails);

  function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
  }

  return (
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
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search - {searchText}
        </button>
      </div>
      <div className="RestroCart">
        {restaurants.map((restaurant) => {
          return <RestroCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
//   This file is names as Body.jsx beacause it's react file we can write .js no issues or if code in typescript we can write .tsx or .ts
