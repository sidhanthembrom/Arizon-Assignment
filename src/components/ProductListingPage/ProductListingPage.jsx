import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCartPlus,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import ProductCard from "../ProductCard/ProductCard";
import ErrorPage from "../ErrorPage/ErrorPage";
import MiniCart from "../MiniCart/MiniCart";

export default function ProductListingPage() {
  const [productsArr, setProductsArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  const fetchedData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetch("https://fakestoreapi.com/products");
      const response = await data.json();
      setProductsArr(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const handleMiniCartEvent = () => {
    setIsMiniCartOpen(!isMiniCartOpen);
  };

  if (loading) {
    // loading spinner while data is being fetched
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-orange-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    // ErrorPage if an error occurs
    return <ErrorPage />;
  }

  return (
    <>
      <div className="px-6 md:px-10">
        <header className="flex flex-wrap justify-between items-center py-6 font-semibold">
          <img
            src="https://themewagon.github.io/mellow/images/main-logo.png"
            alt="main-logo"
            className="h-12"
          />
          <nav className="flex gap-6 items-center">
            <Link
              to={"/"}
              className="hover:text-orange-500 hidden md:block font-medium not-italic"
            >
              Home
            </Link>
            <Link
              to={"/products"}
              className="hover:text-orange-500 hidden md:block font-medium not-italic"
            >
              Products
            </Link>
            <a
              href="#"
              className="hover:text-orange-500 hidden md:block font-medium not-italic"
            >
              About Us
            </a>
            <a
              href="#footer"
              className="hover:text-orange-500 hidden md:block font-medium not-italic"
            >
              Contact Us
            </a>
            <FaCartPlus
              className="cursor-pointer hover:text-orange-500"
              size={28}
              onClick={handleMiniCartEvent}
            />
          </nav>
        </header>

        <main>
          {isMiniCartOpen && <MiniCart />}
          <section id="products" className="py-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              All Products
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsArr.map((item) => (
                <li key={item.id}>
                  <ProductCard item={item} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      <footer
        id="footer"
        className="py-12 px-6 md:px-20 bg-red-100 font-normal not-italic md:flex justify-between items-start space-y-10 md:space-y-0"
      >
        <div>
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <div className="flex gap-4 pt-4">
            <FaFacebookF color="orange" size={20} />
            <FaInstagram color="orange" size={20} />
            <FaTwitter color="orange" size={20} />
            <FaPinterestP color="orange" size={20} />
            <FaYoutube color="orange" size={20} />
            <FaWhatsapp color="orange" size={20} />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Our Info</h2>
          <div className="flex gap-2 items-center pt-4">
            <FaMapMarkerAlt color="orange" size={20} />
            <p>Janpath Road, near Tanishq</p>
          </div>
          <div className="flex gap-2 items-center pt-2">
            <FaMobileAlt color="orange" size={20} />
            <p>+666 333 9999</p>
          </div>
          <div className="flex gap-2 items-center pt-2">
            <FaEnvelope color="orange" size={20} />
            <p>YourDomain@Email.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
