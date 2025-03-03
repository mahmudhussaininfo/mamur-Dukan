import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/Context";
import Title from "../components/Title";

const Cart = () => {
  const { currency, cart, products } = useContext(shopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let temp = [];
    for (const items in cart) {
      for (const item in cart[items]) {
        if (cart[items][item] > 0) {
          temp.push({
            id: items,
            size: item,
            count: cart[items][item],
          });
        }
      }
    }
    setCartData(temp);
  }, [cart]);

  return (
    <>
      <div className="container mx-auto max-sm:px-5 py-10">
        <Title heading={"Your Cart"} />
        <hr className="border border-gray-200" />
        <div>
          {cartData.map((item, index) => {
            const product = products.find((data) => data._id === item._id);
            console.log(product);
            return (
              <>
                <div key={index}>Hello</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
