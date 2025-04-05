import React, { useContext, useState } from "react";
import CartTotal from "./cartTotal";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../context/Context";
import axios from "axios";
import Swal from "sweetalert2";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("Cash");

  const {
    BASE,
    products,
    deleveryFee,
    token,
    cart,
    setCart,
    cartCount,
    totalAmount,
  } = useContext(shopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];

      for (const items in cart) {
        for (const item in cart[items]) {
          if (cart[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cart[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: totalAmount() + deleveryFee,
      };

      switch (method) {
        case "Cash":
          const { data } = await axios.post(`${BASE}/placeOrder`, orderData, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (data.success) {
            setCart({});
            navigate("/my-order");
            Swal.fire({
              icon: "success",
              title: data.message,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: data.message,
            });
          }

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container mx-auto flex flex-col sm:flex-row  justify-between gap-4 pt-10 min-h-[80vh]"
      >
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
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Street"
              name="street"
              onChange={handleChange}
              value={formData.street}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="City"
              name="city"
              onChange={handleChange}
              value={formData.city}
            />
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="State"
              name="state"
              onChange={handleChange}
              value={formData.state}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Zip Code"
              name="zip"
              onChange={handleChange}
              value={formData.zip}
            />
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              value={formData.country}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="border w-full border-gray-200 p-2 text-sm rounded outline-none"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
        </div>
        {/* ========= total cast ================= */}
        {/* total */}
        <div className="w-[40%] flex flex-col mt-10">
          <CartTotal />
          {/* <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-green-600 font-semibold cursor-pointer text-white mt-5 px-5 py-2 rounded-md"
            >
              Proceed To Checkout
            </button>
          </div> */}

          {/* ========= Payment method ===============*/}
          <div className="flex items-end gap-2">
            <h1 className="font-semibold text-xl uppercase mt-10">
              payment method
            </h1>
            <hr className="w-40 max-sm:hidden" />
          </div>
          <div className="flex gap-2 mt-7">
            <div
              onClick={() => setMethod("Stripe")}
              className=" cursor-pointer flex gap-2 items-center border p-3 rounded text-white bg-blue-500"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "Stripe" ? "bg-green-600 border-green-600" : ""
                }`}
              ></p>
              <p>Stripe</p>
            </div>
            <div
              onClick={() => setMethod("Razo")}
              className=" cursor-pointer flex gap-2 items-center border p-3 rounded text-white bg-orange-500"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "Razo" ? "bg-green-600 border-green-600" : ""
                }`}
              ></p>
              <p>RazoPay</p>
            </div>
            <div
              onClick={() => setMethod("Cash")}
              className="cursor-pointer flex gap-2 items-center border p-3 rounded text-white bg-black"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "Cash" ? "bg-green-600 border-green-600" : ""
                }`}
              ></p>
              <p>Cash On Delivery</p>
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-green-600 font-semibold cursor-pointer text-white mt-5 px-5 py-2 rounded-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
