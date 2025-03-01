import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="container mx-auto py-20">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold capitalize mb-3">
            Subscribe now & get 20% off
          </h1>
          <p className="text-sm">
            Subscribe to our newsletter to get the latest fashion updates.
          </p>
          <form className="py-5 w-full sm:w-1/2 flex items-center justify-center">
            <input
              className="outline-none bor border-2 px-4 py-3 border-gray-300"
              type="text"
              placeholder="Enter Your Email ID"
            />
            <button className="bg-black px-8 py-3 text-white">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
