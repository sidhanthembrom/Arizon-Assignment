import { useContext } from "react";
import MyContext from "../../Context/MyContext";

export default function ProductCard(props) {
  const { item } = props;

  const { addToCart } = useContext(MyContext);

  const handleAddEvent = () => {
    addToCart(item);
  };

  return (
    <div className="flex flex-col justify-between items-center text-center gap-4 shadow-md p-4 h-[500px] rounded-lg">
      <img
        src={item.image}
        className="w-full h-48 object-contain rounded-lg" // Adjusted image height
        alt={item.image}
      />
      <p className="font-semibold text-lg text-gray-800">{item.title}</p>
      <p className="font-medium text-xl text-gray-700">{`Rs. ${item.price}`}</p>
      <button
        onClick={handleAddEvent}
        className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
}
