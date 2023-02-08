import { IMG_CDN_URL } from "../config";
const RestroCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
  }) => {
    // object destructring
    //   const { name, cloudinaryImageId, cuisines, avgRating } = restaurant.data;
    return (
      <div className="RestroList">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="img"></img>
        {/* <h2>{props.restaurant.data.name}</h2> */}
        {/* <h2>{restaurant.data.name}</h2> */}
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} Star</h4>
      </div>
    );
  };
  export default RestroCard;