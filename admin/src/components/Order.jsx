import { useContext, useState } from "react";
import { adminContext } from "../context/Context";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
// import { moment } from "moment";

const Order = () => {
  const { token, BASE, currency } = useContext(adminContext);

  const [order, setOrder] = useState([]);

  const orderStatusUpdate = async (e, id) => {
    try {
      const { data } = await axios.post(
        `${BASE}/orderStatus`,
        {
          id,
          status: e.target.value,
        },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });
        await fetechOrder();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const fetechOrder = async () => {
    if (!token) {
      return null;
    }
    try {
      const { data } = await axios.get(`${BASE}/listOrders`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setOrder(data.orders);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetechOrder();
  }, [token]);
  return (
    <>
      <div>
        <h1>{order.length > 0 ? "Order" : "No Order Yet"}</h1>
        {order.length > 0
          ? order.map((item, index) => (
              <div
                key={index}
                className="text-sm py-3 grid items-center grid-cols-2 md:grid-cols-[2fr_3fr_2fr_1fr] gap-10 border-b last:border-b-0 border-gray-300"
              >
                <div>
                  {item.items.map((orderItem, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <img
                        className="w-16 object-cover"
                        src={orderItem.photo[0]}
                        alt={orderItem.name}
                      />
                      <div className="flex flex-col">
                        <h1 className="pt-3">{orderItem.name}</h1>
                        <p> Size: {orderItem.sizes.toString()}</p>
                        <p>
                          Price: {orderItem.price} {currency}
                        </p>
                        <p> Quantity: {orderItem.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h1>Order ID: {item._id}</h1>
                  <h1 className="text-md font-semibold">
                    Name: {item.address.firstName} {item.address.lastName}
                  </h1>
                  <p>
                    Shipping Address: {item.address.city},{" "}
                    {item.address.country}
                  </p>
                  <p>Email: {item.address.email}</p>
                  <p>Phone: {item.address.phone}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">
                    Total: {item.amount} {currency}
                  </h1>

                  <p>Payment Method: {item.paymentMethod}</p>
                  <p>Payment Status: {item.payment ? "Done" : "Pending"}</p>
                  <p>Order Date: {moment().format("ll")}</p>
                </div>
                <div>
                  <select
                    className="outline-none border border-gray-200 p-3"
                    value={item.status}
                    onChange={(e) => orderStatusUpdate(e, item._id)}
                  >
                    <option value="Delivery">Delivery</option>
                    <option value="Order Placed">Order Placed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Order;
