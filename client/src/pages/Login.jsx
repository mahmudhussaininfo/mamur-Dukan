import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Login");
  return (
    <>
      <div className="container mx-auto min-h-[80vh] sm:w-96 flex justify-center items-center">
        <form className="flex flex-col items-center gap-4 py-10 bg-amber-400 w-[90%]">
          <h1>{state}</h1>
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
          {state === "Login" && (
            <div className="flex justify-between w-full text-sm items-center">
              <Link>Forget Password</Link>
              <Link>Create An Account</Link>
            </div>
          )}
          <div>
            <button className="bg-green-600 text-white p-2 rounded w-full">
              {state === "Login" ? "Sign in" : "Register"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
