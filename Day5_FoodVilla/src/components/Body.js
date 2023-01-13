import { useState } from "react";
import { RestroCardDetails } from "../config";
import RestroCard from "./RestroCard";

const Body = () => {
  // const searchText = "KFC";

  const [searchText, setSearchText] = useState("KFC");
  // to maintain the list of restaurant
  const [restaurants, setRestaurants] = useState(RestroCardDetails);
  const [buttonClick, setButtonClick] = useState("false");

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
          className="search-button"
          onClick={() => {
            let data;
            //need to filter the data
            if (buttonClick === "false") {
              console.log("button clicked", buttonClick);
              setButtonClick("true");
              data = filterData(searchText, restaurants);
              setRestaurants(data);
            } else {
              console.log("button clicked in else", buttonClick);
              data = RestroCardDetails;
              data = filterData(searchText, data);
              setRestaurants(data);
            }
            // const data = filterData(searchText, restaurants);
            // // update the state - restaurants variable (The UseState)
            // setRestaurants(data); // we can update the daat using the setrestaurant function which is provided by the useState() hook
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
