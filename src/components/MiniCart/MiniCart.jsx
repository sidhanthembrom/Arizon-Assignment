import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { Link } from "react-router-dom";

export default function MiniCart() {
  const { cartList } = useContext(MyContext);

  let subtotal = 0;
  for (let product of cartList) {
    subtotal += product.quantity * product.price;
  }
  subtotal = Number(subtotal.toFixed(2));

  const isCheckoutBtnDisabled = cartList.length === 0;

  return (
    <div className="absolute top-16 right-10 w-72 md:w-80 bg-white shadow-lg rounded-md p-4 z-50">
      <h2 className="text-lg md:text-xl font-semibold mb-3">My Cart</h2>
      <hr className="mb-2 border-gray-300" />
      <ul className="space-y-2">
        {cartList.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-3 text-sm md:text-base py-1"
          >
            <img
              src={item.image}
              alt={item.image}
              className="h-16 w-16 object-cover rounded-md"
            />
            <div className="flex-grow">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-600 italic">{`Qty: ${item.quantity}`}</p>
              <p className="font-semibold">{`Rs. ${item.price}`}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-right mt-3 font-semibold">Subtotal: Rs. {subtotal}</p>
      <hr className="my-3 border-gray-300" />
      <div className="flex justify-between items-center gap-2">
        <Link to={"/cart"} className="w-1/2">
          <button className="w-full bg-orange-600 text-white py-2 rounded-md hover:cursor-pointer font-semibold">
            View Cart
          </button>
        </Link>
        <Link to={isCheckoutBtnDisabled ? "#" : "/cart"} className="w-1/2">
          <button
            disabled={isCheckoutBtnDisabled}
            className={`w-full bg-green-500 text-white py-2 rounded-md font-semibold ${
              isCheckoutBtnDisabled
                ? "cursor-not-allowed opacity-50"
                : "hover:cursor-pointer"
            }`}
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
