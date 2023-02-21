import { IMG_CDN_URL } from "../config";

const FoodItemCart = ({ name, cloudinaryImageId, price }) => {
  return (
    <div className="w-[300px] h-[320px] p-2 m-2 box-border border-2 shadow-lg bg-purple-100 hover:border-4 ...">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img"></img>
      <h2 className="font-bold text-lg">{name}</h2>
      <h2 className="font-bold text-lg">{price / 100}</h2>
    </div>
  );
};
export default FoodItemCart;
