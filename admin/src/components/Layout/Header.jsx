import React, { useContext, useState } from "react";
import { photo } from "../../utils/utils.js";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { shopContext } from "../../context/Context.jsx";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const { search, setSearch, searchShow, setSearchShow, cartCount } =
    useContext(shopContext);

  return (
    <>
      <div className="flex justify-between items-center container mx-auto py-3 px-5">
        <div>
          <Link to="/">
            <img className="h-14" src={photo.logo} alt="" />
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex items-center gap-4">
            <NavLink to="/">
              <p>Home</p>
              <hr className="bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/shop">
              <p>Shop</p>
              <hr className="bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/contact">
              <p>Contact</p>
              <hr className="bg-gray-700 hidden " />
            </NavLink>
            <NavLink to="/about">
              <p>About</p>
              <hr className="bg-gray-700 hidden" />
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-3xl cursor-pointer">
            <IoSearchOutline onClick={() => setSearchShow(true)} />
          </div>
          <div>
            <div className="group relative cursor-pointer">
              <CgProfile className="text-3xl" />
              <div className="hidden group-hover:block absolute right-0">
                <div className="flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 rounded-md">
                  <Link to="/login" className="cursor-pointer hover:font-bold">
                    My Profile
                  </Link>
                  <Link className="cursor-pointer hover:font-bold">Orders</Link>
                  <Link className="cursor-pointer hover:font-bold">Logout</Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <CiShoppingCart className="text-3xl cursor-pointer" />
            <p className="absolute top-3 right-0 text-white font-bold bg-green-500 rounded-full text-center aspect-square w-4 leading-4 text-sm">
              {cartCount()}
            </p>
          </Link>
          <div className="sm:hidden ">
            <HiMenuAlt3
              onClick={() => setVisible(true)}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* menu for mobile */}
      <div
        className={`sm:hidden fixed duration-300 top-0 right-0 bottom-0 overflow-hidden bg-slate-100 transition-all ${
          visible ? "w-full min-h-screen" : "w-0"
        }`}
      >
        <div className="flex flex-col text-center gap-3 p-3">
          <div className="flex items-center gap-3">
            <HiMenuAlt1
              onClick={() => setVisible(false)}
              className="text-3xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col justify-center min-h-screen items-center ">
            <NavLink
              className="border-b border-b-gray-400 hover:bg-black w-full p-3 hover:text-white hover:scale-110 transition-all ease-in-out text-2xl"
              onClick={() => setVisible(false)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="border-b border-b-gray-400 hover:bg-black w-full p-3 hover:text-white hover:scale-110 transition-all ease-in-out text-2xl"
              onClick={() => setVisible(false)}
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className="border-b border-b-gray-400 hover:bg-black w-full p-3 hover:text-white hover:scale-110 transition-all ease-in-out text-2xl"
              onClick={() => setVisible(false)}
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              className="border-b border-b-gray-400 hover:bg-black w-full p-3 hover:text-white hover:scale-110 transition-all ease-in-out text-2xl"
              onClick={() => setVisible(false)}
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
