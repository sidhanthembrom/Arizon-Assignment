import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function FeaturedProducts() {
  const [productsArr, setProductsArr] = useState([]);
  const [error, setError] = useState(false);

  const fetchedData = async () => {
    try {
      setError(false);
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      const newArr = response.filter((item) => item.id <= 4);
      setProductsArr(newArr);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="px-6 md:px-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold py-4 mb-10 border-b-2 border-gray-300">
        Featured Products
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-xl overflow-hidden"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {productsArr.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md h-[450px] flex flex-col justify-between">
              <div className="h-[250px] flex items-center justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-800 text-center line-clamp-2">
                {item.title}
              </h3>
              <p className="text-center text-gray-700 mt-2 font-normal">
                Rs. {item.price.toFixed(2)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
