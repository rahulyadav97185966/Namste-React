import { useDispatch, useSelector } from "react-redux";
import FoodItemCart from "./FoodItemCart";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearItem = (item) => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">this is cart</h1>
      <button
        className="px-6 py-2 align-middle justify-center bg-white text-green-400 rounded-lg ml-8 font-medium border-solid border-2 borer-green-400 hover:shadow-lg"
        onClick={() => handleClearItem()}
      >
        Clear Cart
      </button>
      <div className="flex justify-center">
        {cartItems.map((item) => (
          <FoodItemCart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
