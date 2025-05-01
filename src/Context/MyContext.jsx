import React from "react";

const MyContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
});

export default MyContext;
