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
import { useState } from "react";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import MiniCart from "../MiniCart/MiniCart";

export default function HomePage() {
  const [isMiniCartOpen, setisMiniCartOpen] = useState(false);

  const handleMiniCartEvent = () => {
    setisMiniCartOpen(!isMiniCartOpen);
  };

  return (
    <div>
      <div className="px-6 md:px-10">
        <header className="flex flex-wrap justify-between items-center py-6 font-semibold">
          <Link to={"/"}>
            <img
              src="https://themewagon.github.io/mellow/images/main-logo.png"
              alt="main-logo"
              className="h-12"
            />
          </Link>
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
              href="#about-us"
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

        <main className="font-normal not-italic">
          {isMiniCartOpen && <MiniCart />}

          <section id="hero-section" className="mb-20">
            <div
              className="bg-cover bg-center h-[500px] md:h-[80vh] flex justify-center items-center rounded-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3')`,
              }}
            >
              <h1 className="backdrop-blur-lg bg-white/30 text-neutral-900 text-3xl md:text-5xl text-center px-6 py-4 rounded-xl font-bold">
                Welcome to the Ultimate Shopping Experience
              </h1>
            </div>
          </section>

          <section id="about-us" className="space-y-20">
            <div className="md:flex justify-center gap-10 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold">About Mellow</h2>
                <p className="md:text-xl mt-4">
                  Your calm, curated destination for lifestyle essentials.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1691752060291-50e019a9a16b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="about-mellow"
                className="w-full md:w-1/2 rounded-xl mt-6 md:mt-0"
              />
            </div>

            <div className="md:flex md:flex-row-reverse justify-center gap-10 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold">Who We Are</h2>
                <p className="md:text-xl mt-4">
                  Mellow is an eCommerce platform focused on bringing you
                  quality, affordable, and aesthetic products that fit into your
                  everyday life with ease and simplicity.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1622676614630-a9109126264a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="who-we-are"
                className="w-full md:w-1/2 rounded-xl mt-6 md:mt-0"
              />
            </div>

            <div className="md:flex justify-center gap-10 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-4xl font-bold">Our Mission</h2>
                <p className="md:text-xl mt-4">
                  We aim to deliver a seamless and enjoyable shopping
                  experience, where you can discover items that make your home,
                  wardrobe, or workspace feel just right — mellow, even.
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1573035561029-5414bc63f441?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="our-mission"
                className="w-full md:w-1/2 rounded-xl mt-6 md:mt-0"
              />
            </div>
          </section>

          <section className="featured-products pt-20">
            <FeaturedProducts />
          </section>

          <div className="flex justify-center pt-10 pb-24">
            <Link to={"/products"}>
              <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:cursor-pointer font-medium not-italic">
                Shop Now
              </button>
            </Link>
          </div>
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
    </div>
  );
}
