import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import useRestaurant from "../utils/useRestaurant";
import Shimmar from "./Shimmar";
const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantName = useRestaurant(id);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurantName) {
    return <Shimmar />;
  }
  return (
    <div className="flex flex-wrap justify-center m-10">
      <div className="p-6">
        <img
          className="w-96 mb-8"
          src={IMG_CDN_URL + restaurantName.cloudinaryImageId}
          alt="restroIMage"
        />

        <h1 className="text-lg font-bold">
          Restaurant id: {restaurantName.id}
        </h1>
        <h2>Name of Restro: {restaurantName.name}</h2>
        <h2>City: {restaurantName.city}</h2>
        <h2>Cost: {restaurantName.costForTwoMsg}</h2>
        {/* {console.log(Object.values(restaurantName.menu.items))} */}
      </div>
      <div className="p-6">
        <h1 className="font-bold text-xl">Menu</h1>
        <ul>
          {Object.values(restaurantName?.menu?.items).map((item) => (
            <div
              className="flex justify-between border border-box w-5/6 p-4 mb-4 shadow-md"
              key={item.id}
            >
              <div>
                <h1 className="text-xl font-medium mb-4">{item.name}</h1>
                <h2>Price: {item.price / 100}</h2>
              </div>
              <div>
                <img
                  className="w-30 h-24 object-contain shadow-xl"
                  src={IMG_CDN_URL + item.cloudinaryImageId}
                  alt="restroIMage"
                />
                <button
                  className="px-6 py-2 bg-white text-green-400 rounded-lg ml-8 -mt-20 font-medium border-solid border-2 borer-green-400 hover:shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            </div>
            // <li className="list-disc" key={item.id}>
            //   {item.name} {item.price}
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
