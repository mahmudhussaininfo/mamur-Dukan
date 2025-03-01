import React, { useContext } from "react";
import heroImg from "../../public/hero.jpg";
import { Link } from "react-router-dom";
import { shopContext } from "../context/Context";

const Hero = () => {
  const { currency } = useContext(shopContext);

  return (
    <>
      <div className="flex flex-col sm:flex-row border border-gray-200 mx-auto container my-5">
        {/* left side */}
        <div className="w-full flex gap-3 sm:w-1/2 justify-center max-sm:items-center sm:mx-20 flex-col bg py-20">
          <h4 className="uppercase">Our BestSellers</h4>
          <h1 className="capitalize text-5xl font-semibold">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <Link to="/shop" className="uppercase">
              Shop Now
            </Link>
            <hr className="w-16" />
          </div>
        </div>
        {/* right side */}
        <div className="">
          <img className="h-full" src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
