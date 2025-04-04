import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/Context";
import Title from "../components/Title";
import { FaRegTrashAlt } from "react-icons/fa";
import CartTotal from "../components/cartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { currency, cart, products, updateCartQuantity } =
    useContext(shopContext);
  const [cartData, setCartData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const temp = [];
      for (const items in cart) {
        for (const item in cart[items]) {
          if (cart[items][item] > 0) {
            temp.push({
              _id: items,
              size: item,
              count: cart[items][item],
            });
          }
        }
      }
      setCartData(temp);
    }
  }, [cart, products]);

  return (
    <>
      <div className="container mx-auto max-sm:px-5 py-10">
        <Title heading={"Your Cart"} />
        <hr className="border border-gray-200" />
        <div>
          {cartData?.map((item, index) => {
            const product = products.find((data) => data._id === item._id);

            return (
              <>
                <div
                  className="flex justify-between items-center border-b-2 border-gray-200 py-5"
                  key={index}
                >
                  <div className="flex items-start w-[25%]">
                    <img
                      className="w-16 object-cover"
                      src={product?.photo[0]}
                      alt={product?.name}
                    />
                    <div>
                      <h1 className="text-sm">{product?.name}</h1>
                      <div className="flex gap-3">
                        <span>
                          {product?.price}
                          {currency} BDT
                        </span>
                        <span>{item?.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <input
                      type="number"
                      className="w-20 border border-gray-200 rounded outline-none"
                      min={1}
                      defaultValue={item.count}
                      onChange={(e) =>
                        e.target.value === "" || e.target.value === "0"
                          ? null
                          : updateCartQuantity(
                              item._id,
                              item.size,
                              Number(e.target.value)
                            )
                      }
                    />
                  </div>
                  <div>
                    <button
                      className="cursor-pointer"
                      onClick={() => updateCartQuantity(item._id, item.size, 0)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* total */}

        <div className="flex flex-col sm:items-end w-full mt-10">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-green-600 font-semibold cursor-pointer text-white mt-5 px-5 py-2 rounded-md"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
