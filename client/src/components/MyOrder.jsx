import React, { useContext } from "react";
import { shopContext } from "../context/Context";

const MyOrder = () => {
  const [currency, products] = useContext(shopContext);
  return <div>MyOrder</div>;
};

export default MyOrder;
