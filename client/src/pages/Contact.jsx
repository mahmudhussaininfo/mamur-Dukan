import React from "react";
import Title from "../components/Title";
import { photo } from "../utils/utils.js";

const Contact = () => {
  return (
    <div className="container mx-auto min-h-[80vh] mt-10">
      <Title heading="Contact Us" />
      <div className="flex flex-col md:flex-row gap-20 max-sm:px-5 items-center py-10">
        <div className="w-full sm:w-1/2">
          <img className="" src={photo.contact} alt="" />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-2">
          <div>
            <b>My Store</b>
            <p>Location: Nipoban R/a, Khadim Nagar, Sylhet</p>
            <p>Phone: (+880) 1776757650</p>
          </div>
          <div className="mt-3">
            <b>Careers at Forever</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="mt-4">
            <button className="bg-green-600 cursor-pointer px-5 py-2 rounded text-white">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      {/* ================= choose us section ================== */}
      <div className="max-sm:px-5">
        {/* =============== Title ================ */}
        <div className="flex items-center gap-2 mb-5 mt-20">
          <h1 className="font-semibold text-xl uppercase mb-3">
            Why Choose Us
          </h1>
          <hr className="w-40 max-sm:hidden" />
        </div>
        {/* ========= 3 colums box ============== */}
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="flex flex-col gap-5 p-10 border border-gray-200 rounded">
            <h3 className="font-semibold">Quality Assurance:</h3>
            <p>
              Bangladesh's largest online grocery service and the world's first
              1-hour grocery delivery service in Dhaka, the world's most densely
              populated city. Since then, we've gone on to redefine supply
              chains, ease commodity trade, support refugee camps and reduce
              food wastage by building technology into the supply chain, all the
              way back to the farms. In 2019,.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-10 border border-gray-200 rounded">
            <h3 className="font-semibold">Convenience:</h3>
            <p>
              Bangladesh's largest online grocery service and the world's first
              1-hour grocery delivery service in Dhaka, the world's most densely
              populated city. Since then, we've gone on to redefine supply
              chains, ease commodity trade, support refugee camps and reduce
              food wastage by building technology into the supply chain, all the
              way back to the farms. In 2019,.
            </p>
          </div>
          <div className="flex flex-col gap-5 p-10 border border-gray-200 rounded">
            <h3 className="font-semibold">Exceptional Customer Service:</h3>
            <p>
              Bangladesh's largest online grocery service and the world's first
              1-hour grocery delivery service in Dhaka, the world's most densely
              populated city. Since then, we've gone on to redefine supply
              chains, ease commodity trade, support refugee camps and reduce
              food wastage by building technology into the supply chain, all the
              way back to the farms. In 2019,.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
