import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex items-center min-h-screen justify-center">
        <div className="w-full sm:w-[25%] p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6"> Admin Login</h2>
          <form action="">
            <div className="flex flex-col gap-2">
              <p>Email</p>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Email</p>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-700 mt-2 text-white rounded-md hover:bg-primary-600"
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
