import React, { useContext } from "react";
import { shopContext } from "../context/Context";
import moment from "moment";

const MyOrder = () => {
  const { currency, products } = useContext(shopContext);
  return (
    <>
      <div className="container mx-auto min-h-[80vh] py-20">
        {/* =============== Title ================ */}
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-xl uppercase mb-5">My orders</h1>
          <hr className="w-40 max-sm:hidden" />
        </div>
        <div className="">
          {products.slice(1, 4).map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b-2 border-gray-200 py-5"
            >
              <div className="flex items-start w-[25%]">
                <img
                  className="w-16 object-cover"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div>
                  <h1 className="text-sm">{item.name}</h1>
                  <div className="flex gap-3">
                    <span>
                      {item.price}
                      {currency} BDT
                    </span>
                    <span>{item.sizes}</span>
                  </div>
                  <div className="flex gap-3">
                    <span>{moment().format("ll")}</span>
                    <span>Status: {item.status}</span>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer flex gap-2 items-center p-3 rounded">
                <p className={`min-w-3.5 h-3.5 bg-green-600 rounded-full`}></p>
                <p>Shipped</p>
              </div>
              <div>
                <button className="border border-gray-200 px-4 py-2 rounded-md">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrder;
