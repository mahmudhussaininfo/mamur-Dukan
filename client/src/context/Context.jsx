import { createContext, useEffect, useState } from "react";
// import { products } from "../utils/utils.js";
import Swl from "sweetalert2";
import axios from "axios";
export const shopContext = createContext();
const BASE = import.meta.env.VITE_BACKEND_URL;

const ContextProvider = ({ children }) => {
  // Initialize your state here
  const currency = "৳";
  const deleveryFee = 60;
  const [search, setSearch] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

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

  // update cart quantity
  const updateCartQuantity = (id, size, quantity) => {
    let cartData = { ...cart };
    cartData[id][size] = quantity;
    setCart(cartData);
  };

  // get total amount of cart
  const totalAmount = () => {
    let total = 0;
    for (const items in cart) {
      const product = products.find((data) => data._id === items);
      for (const item in cart[items]) {
        if (cart[items][item] > 0) {
          total += product.price * cart[items][item];
        }
      }
    }
    return total;
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(`${BASE}/products`);
      if (response) {
        setProducts(response.data.products);
      } else {
        console.log("No response from server");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const values = {
    currency,
    products,
    getProducts,
    search,
    setSearch,
    searchShow,
    setSearchShow,
    cart,
    addCart,
    cartCount,
    updateCartQuantity,
    totalAmount,
    deleveryFee,
  };
  return <shopContext.Provider value={values}>{children}</shopContext.Provider>;
};

export default ContextProvider;
