import React, { useContext, useEffect } from "react";
import { adminContext } from "../context/Context";
import axios from "axios";
import { LuTrash } from "react-icons/lu";
import Swal from "sweetalert2";

const List = () => {
  const { BASE } = useContext(adminContext);
  const [list, setList] = React.useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`${BASE}/products`);
      if (response) {
        setList(response.data.products);
      } else {
        console.log("No response from server");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const removeProducts = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const { data } = axios.post(`${BASE}/removeProduct`, {
            id,
          });
          setList(list.filter((product) => product._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: data.message,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Cancelled",
            text: "Your file is safe :)",
            icon: "error",
          });
        }
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="py-3">
        <h1>Add Product List</h1>
        {/* Produtcs List Table */}
        <div className="flex flex-col">
          <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] gap-4 p-3 bg-gray-100 text-sm">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b className="text-center">Action</b>
          </div>

          {/* listing Products */}
          {list.length > 0 &&
            list.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] gap-4 p-3 border-b-2 border-gray-200 text-sm"
              >
                <img src={item.photo[0]} className="w-12" alt="" />
                <span>{item.name}</span>
                <span>{item.category}</span>
                <span>{item.price}</span>
                <div className="flex justify-center">
                  <button
                    onClick={() => removeProducts(item._id)}
                    className="cursor-pointer"
                  >
                    <LuTrash />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default List;
