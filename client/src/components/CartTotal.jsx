import React, { useContext } from "react";
import { shopContext } from "../context/Context";
import Title from "./Title";

const CartTotal = () => {
  const { currency, totalAmount, deleveryFee } = useContext(shopContext);
  return (
    <>
      <div className="flex flex-col sm:items-end mt-10">
        <Title heading="cart totals" />
        <div className="flex justify-between sm:w-[27%] border-b-2 border-gray-200 py-3">
          <h3>Subtotal</h3>
          <span>
            {currency} {totalAmount()} BDT
          </span>
        </div>
        <div className="flex justify-between sm:w-[27%] border-b-2 border-gray-200 py-3">
          <h3>Shipping Fee</h3>
          <span>
            {currency} {deleveryFee}
          </span>
        </div>
        <div className="flex justify-between sm:w-[27%] py-3">
          <h3>Total</h3>
          <span>
            {currency}
            {totalAmount() === 0 ? 0 : totalAmount() + deleveryFee} BDT
          </span>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
