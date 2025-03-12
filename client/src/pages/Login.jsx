import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Login = () => {
  const [state, setState] = useState("Login");
  return (
    <>
      <div className="container mx-auto min-h-[80vh] sm:w-96 flex justify-center items-center">
        <form className="flex flex-col items-center gap-4 py-10 w-[90%]">
          <Title heading={state} />

          {state === "Login" ? (
            ""
          ) : (
            <input
              className="border w-full border-gray-200 rounded p-2 outline-none"
              type="text"
              placeholder="Username"
            />
          )}

          <input
            className="border w-full border-gray-200 rounded p-2 outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            className="border w-full border-gray-200 rounded p-2 outline-none"
            type="text"
            placeholder="Password"
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
            <button className="bg-green-600 cursor-pointer text-white px-10 mt-10 py-2 rounded w-full">
              {state === "Login" ? "Sign in" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
