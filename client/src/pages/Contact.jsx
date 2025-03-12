import React from "react";
import Title from "../components/Title";
import { photo } from "../utils/utils.js";

const Contact = () => {
  return (
    <div className="container mx-auto min-h-[80vh]">
      <Title heading="Contact Us" />
      <div className="flex gap-20 items-center py-10">
        <div className="w-1/2">
          <img className="" src={photo.contact} alt="" />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <div>
            <b>My Store</b>
            <p>Location: 1234 Main Street, Anytown, CA 12345 USA</p>
            <p>Phone: (800) 123-4567</p>
          </div>
          <div className="mt-10">
            <b>Careers at Forever</b>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <button>Explore Jobs</button>
          </div>
        </div>
      </div>
      {/* =============== Title ================ */}
      <div className="flex items-center gap-2 mb-5 mt-20">
        <h1 className="font-semibold text-xl uppercase mb-3">Why Choose Us</h1>
        <hr className="w-40 max-sm:hidden" />
      </div>
      {/* ========= 3 colums box ============== */}
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col gap-5 p-10 border border-gray-200 rounded">
          <h3 className="font-semibold">Quality Assurance:</h3>
          <p>
            Bangladesh's largest online grocery service and the world's first
            1-hour grocery delivery service in Dhaka, the world's most densely
            populated city. Since then, we've gone on to redefine supply chains,
            ease commodity trade, support refugee camps and reduce food wastage
            by building technology into the supply chain, all the way back to
            the farms. In 2019,.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-10 border border-gray-200 rounded">
          <h3 className="font-semibold">Convenience:</h3>
          <p>
            Bangladesh's largest online grocery service and the world's first
            1-hour grocery delivery service in Dhaka, the world's most densely
            populated city. Since then, we've gone on to redefine supply chains,
            ease commodity trade, support refugee camps and reduce food wastage
            by building technology into the supply chain, all the way back to
            the farms. In 2019,.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-10 border border-gray-200 rounded">
          <h3 className="font-semibold">Exceptional Customer Service:</h3>
          <p>
            Bangladesh's largest online grocery service and the world's first
            1-hour grocery delivery service in Dhaka, the world's most densely
            populated city. Since then, we've gone on to redefine supply chains,
            ease commodity trade, support refugee camps and reduce food wastage
            by building technology into the supply chain, all the way back to
            the farms. In 2019,.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
