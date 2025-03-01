import React from "react";
import { photo } from "./../utils/utils.js";

const Policy = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex flex-col sm:flex-row items-center gap-32 sm:gap-60 justify-center">
          {/* coloum */}
          <div className="flex flex-col text-center items-center">
            <img className="w-10 sm:w-12 mb-5" src={photo.exchange} alt="" />
            <h2 className="font-semibold">Easy Exchange Policy</h2>
            <span className="text-sm">Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex flex-col text-center items-center">
            <img className="w-10 sm:w-12 mb-5" src={photo.quality} alt="" />
            <h2 className="font-semibold">7 Days Return Policy</h2>
            <span className="text-sm">Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex flex-col text-center items-center">
            <img className="w-10 sm:w-12 mb-5" src={photo.support} alt="" />
            <h2 className="font-semibold">Best Customer Support</h2>
            <span className="text-sm">Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
