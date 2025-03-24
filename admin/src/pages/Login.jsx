import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { adminContext } from "../context/Context";

const Login = () => {
  const { BASE, setToken } = useContext(adminContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BASE}/admin`,
        {
          email: input.email,
          password: input.password,
        },
        {
          withCredentials: true,
        }
      );
      if (data.success) {
        setToken(data.token);
        Swal.fire({
          title: data.message,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: data.message,
        });
        console.log(data.message);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: error.response.data.message,
      });
      console.log(error.response.data.message);
    }
    e.preventDefault();
  };
  return (
    <>
      <div className="flex items-center min-h-screen justify-center">
        <div className="w-full sm:w-[25%] p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6"> Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <p>Email</p>
              <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                value={input.email}
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Password</p>
              <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                value={input.password}
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 cursor-pointer bg-green-700 mt-2 text-white rounded-md hover:bg-primary-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
