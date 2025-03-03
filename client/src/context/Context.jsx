import { createContext, useEffect, useState } from "react";
import { products } from "../utils/utils.js";
import Swl from "sweetalert2";

export const shopContext = createContext();

const ContextProvider = ({ children }) => {
  // Initialize your state here
  const currency = "৳";
  const [search, setSearch] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addCart = ({ id, size }) => {
    if (!size) {
      return Swl.fire({
        icon: "error",
        title: "Please select a size",
      });
    }
    let cartData = { ...cart };

    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      (cartData[id] = {}), (cartData[id][size] = 1);
    }

    setCart(cartData);
  };

  //cart icon count
  const cartCount = () => {
    let count = 0;
    for (const items in cart) {
      for (const item in cart[items]) {
        try {
          if (cart[items][item] > 0) {
            count += cart[items][item];
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    return count;
  };

  // // Calculate the total number of items in the cart
  // const cartCount = () => {
  //   return Object.values(cart).reduce((total, sizes) => {
  //     return (
  //       total +
  //       Object.values(sizes).reduce((sum, quantity) => sum + quantity, 0)
  //     );
  //   }, 0);
  // };

  const values = {
    currency,
    products,
    search,
    setSearch,
    searchShow,
    setSearchShow,
    cart,
    addCart,
    cartCount,
  };
  return <shopContext.Provider value={values}>{children}</shopContext.Provider>;
};

export default ContextProvider;
