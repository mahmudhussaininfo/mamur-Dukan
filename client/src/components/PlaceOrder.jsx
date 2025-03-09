import React from "react";
import CartTotal from "./cartTotal";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto flex flex-col sm:flex-row  justify-between gap-4 pt-10 min-h-[80vh]">
        {/* ============ contact information ============== */}
        <div className=" flex flex-col gap-3 w-full sm:w-[30%]">
          {/* =============== Title ================ */}
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-xl uppercase mb-3">
              Delivery Information
            </h1>
            <hr className="w-40 max-sm:hidden" />
          </div>
          {/* ========= form ============== */}
          <div className="flex gap-2">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Last Name"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Email Address"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Street"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="City"
            />
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="State"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Zip Code"
            />
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Country"
            />
          </div>
          <div className="">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Phone"
            />
          </div>
        </div>
        {/* ========= total cast ================= */}

        {/* total */}
        <div className="w-[40%] flex flex-col mt-10">
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

export default PlaceOrder;
