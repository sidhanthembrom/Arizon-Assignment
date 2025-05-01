import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function FullCartPage() {
  const {
    cartList,
    removeFromCart,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(MyContext);

  const handleIncrementEvent = (item) => {
    incrementCartItemQuantity(item);
  };

  const handleDecrementEvent = (item) => {
    decrementCartItemQuantity(item);
  };

  const handleRemoveEvent = (item) => {
    removeFromCart(item);
  };

  let subtotal = 0;
  for (let product of cartList) {
    subtotal += product.quantity * product.price;
  }
  subtotal = Number(subtotal.toFixed(2));

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl md:text-4xl font-semibold mb-5">Cart Details</h1>
      <hr className="mb-8 border-gray-300" />
      <ul className="space-y-4">
        {cartList.map((item) => (
          <li
            key={item.id}
            className="flex items-center rounded-lg border border-gray-200 py-3 px-4 md:py-4 md:px-6"
          >
            <img
              className="h-20 w-20 object-cover rounded-md"
              src={item.image}
              alt={item.image}
            />
            <div className="ml-4 md:ml-6 flex-grow">
              <p className="text-lg font-medium md:text-xl">{item.title}</p>
              <div className="mt-2 flex items-center gap-3">
                <button
                  onClick={() => handleIncrementEvent(item)}
                  className="bg-orange-600 text-white text-sm font-semibold rounded-md py-1 px-2 hover:cursor-pointer"
                >
                  +
                </button>
                <p className="font-semibold text-gray-700">{item.quantity}</p>
                <button
                  onClick={() => handleDecrementEvent(item)}
                  className="bg-orange-600 text-white text-sm font-semibold rounded-md py-1 px-2 hover:cursor-pointer"
                >
                  -
                </button>
              </div>
              <p className="mt-2 font-semibold text-gray-800">{`Rs. ${Number(
                (item.quantity * item.price).toFixed(2)
              )}`}</p>
            </div>
            <FaTrash
              onClick={() => handleRemoveEvent(item)}
              className="text-red-500 hover:text-red-700 text-xl cursor-pointer ml-4"
            />
          </li>
        ))}
      </ul>
      <div className="mt-8 text-right">
        <p className="text-lg font-semibold">
          Subtotal: <span className="font-normal">Rs. {subtotal}</span>
        </p>
        {subtotal === 0 ? null : (
          <div className="mt-2">
            <p>
              Shipping Cost: <span className="font-normal">Rs. 100</span>
            </p>
            <p className="text-xl font-semibold">
              Total:{" "}
              <span className="font-normal">
                Rs. {Number((subtotal + 100).toFixed(2))}
              </span>
            </p>
          </div>
        )}
      </div>
      <hr className="my-8 border-gray-300" />
      <div className="flex justify-between">
        <Link to={"/products"} className="w-1/2 md:w-auto">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:cursor-pointer">
            Go to Products Page
          </button>
        </Link>
        <Link to={"/cart"} className="w-1/2 md:w-auto">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md font-semibold hover:cursor-pointer">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
