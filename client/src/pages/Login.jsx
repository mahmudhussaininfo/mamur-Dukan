import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { shopContext } from "../context/Context";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { token, setToken, BASE } = useContext(shopContext);
  const [state, setState] = useState("Login");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (state === "Login") {
        const { data } = await axios.post(
          `${BASE}/login`,
          {
            email: input.email,
            password: input.password,
          },
          {
            withCredentials: true,
          }
        );
        if (data.success) {
          console.log(data.user);
          setToken(data.token);
          localStorage.setItem("Token", data.token);
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
      } else {
        const { data } = await axios.post(`${BASE}/register`, {
          name: input.name,
          email: input.email,
          password: input.password,
        });
        if (data.success) {
          setState("Login");
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
      }
    } catch (error) {
      console.log(error.response.data.message);
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <div className="container mx-auto min-h-[80vh] sm:w-96 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 py-10 w-[90%]"
        >
          <Title heading={state} />

          {state === "Login" ? (
            ""
          ) : (
            <input
              className="border w-full border-gray-200 rounded p-2 outline-none"
              type="text"
              placeholder="Username"
              name="name"
              onChange={handleChange}
              value={input.name}
            />
          )}

          <input
            className="border w-full border-gray-200 rounded p-2 outline-none"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          <input
            className="border w-full border-gray-200 rounded p-2 outline-none"
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />
          {state === "Login" ? (
            <div className="flex justify-between w-full text-sm items-center">
              <Link>Forget Password</Link>
              <Link onClick={() => setState("Sign Up")}>Create An Account</Link>
            </div>
          ) : (
            <div className="flex justify-between w-full text-sm items-center">
              <span>Already Have and Account?</span>
              <Link onClick={() => setState("Login")}>Login</Link>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="bg-green-600 cursor-pointer text-white px-10 mt-10 py-2 rounded w-full"
            >
              {state === "Login" ? "Sign in" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
