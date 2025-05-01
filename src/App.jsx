import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage/HomePage";
import ProductListingPage from "./components/ProductListingPage/ProductListingPage";
import MyContext from "./Context/MyContext";
import FullCartPage from "./components/FullCartPage/FullCartPage";

function App() {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    setCartList([...cartList, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (item) => {
    const newArr = cartList.filter((product) => product.id !== item.id);
    setCartList(newArr);
  };

  const incrementCartItemQuantity = (item) => {
    const newArr = cartList.map((product) =>
      product.id === item.id
        ? { ...item, quantity: item.quantity + 1 }
        : product
    );
    setCartList(newArr);
  };

  const decrementCartItemQuantity = (item) => {
    // remove from cartList
    if (item.quantity === 1) {
      const newArr = cartList.filter((product) => product.id !== item.id);
      setCartList(newArr);
    } else {
      const newArr = cartList.map((product) =>
        product.id === item.id
          ? { ...item, quantity: item.quantity - 1 }
          : product
      );
      setCartList(newArr);
    }
  };

  return (
    <MyContext.Provider
      value={{
        cartList,
        addToCart,
        removeFromCart,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<FullCartPage />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
