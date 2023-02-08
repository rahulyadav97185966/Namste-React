import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmar from "./Shimmar";
const RestaurantMenu = () => {
  const params = useParams();

  const [restaurantName, setRestaurantName] = useState(null);

  useEffect(() => {
    getRestroInfo();
  }, []);

  async function getRestroInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=19.8779714&lng=75.3488766&menuId=" +
        params.id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantName(json.data);
  }
  if (!restaurantName) {
    return <Shimmar />;
  }
  return (
    <>
      <div>
        <img
          className="img-restro"
          src={IMG_CDN_URL + restaurantName.cloudinaryImageId}
          alt="restroIMage"
        />

        <h1>Restaurant id: {restaurantName.id}</h1>
        <h2>Name of Restro: {restaurantName.name}</h2>
        <h2>City: {restaurantName.city}</h2>
        <h2>Cost: {restaurantName.costForTwoMsg}</h2>
        {/* {console.log(Object.values(restaurantName.menu.items))} */}
      </div>
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurantName?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
