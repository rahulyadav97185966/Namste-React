import { IMG_CDN_URL } from "../config";
const RestroCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // object destructring
  //   const { name, cloudinaryImageId, cuisines, avgRating } = restaurant.data;
  return (
    <div className="w-[300px] h-[320px] p-2 m-2 box-border border-2 shadow-lg bg-purple-100 hover:border-4 ...">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img"></img>
      {/* <h2>{props.restaurant.data.name}</h2> */}
      {/* <h2>{restaurant.data.name}</h2>s */}
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
    </div>
  );
};
export default RestroCard;
