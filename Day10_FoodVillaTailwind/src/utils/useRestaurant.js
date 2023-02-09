import { useState, useEffect } from "react";
const useRestaurant = (id) => {
  const [restaurantName, setRestaurantName] = useState(null);
  useEffect(() => {
    getRestroInfo();
  }, []);

  async function getRestroInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=19.8779714&lng=75.3488766&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurantName(json.data);
  }
  return restaurantName;
};
export default useRestaurant;
