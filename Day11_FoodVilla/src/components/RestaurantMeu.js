import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmar from "./Shimmar";
const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantName = useRestaurant(id);

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
