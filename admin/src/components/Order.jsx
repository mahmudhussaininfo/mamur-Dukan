import React from "react";
import { useContext } from "react";
import { adminContext } from "../context/Context";
import { useEffect } from "react";
import axios from "axios";

const Order = () => {
  const { token, BASE } = useContext(adminContext);

  const fetechOrder = async () => {
    try {
      const { data } = await axios.get(`${BASE}/listOrders`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        console.log(data);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (!token) {
      return null;
    } else {
      fetechOrder();
    }
    // eslint-disable-next-line
  }, [token]);
  return <>Order</>;
};

export default Order;
