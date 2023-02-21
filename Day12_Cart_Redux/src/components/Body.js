import { useState, useEffect } from "react";
import { RestroCardDetails } from "../config";
import RestroCard from "./RestroCard";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = ({ user }) => {
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

  const online = useOnline();
  if (!online) {
    return <h1>Please check your internet connection</h1>;
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
      <div className="px-5 my-6">
        <input
          type="text"
          className="hover:bg-slate-100 hover:rounded-lg outline-none p-3 "
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 px-6 m-2 bg-purple-600 text-white rounded-lg hover:bg-purple-800"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-around">
        {filteredrestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestroCard {...restaurant.data} user={user} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
//   This file is names as Body.jsx beacause it's react file we can write .js no issues or if code in typescript we can write .tsx or .ts
