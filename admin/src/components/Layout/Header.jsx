import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { photo } from "../../utils/utils.js";
import { adminContext } from "../../context/Context.jsx";

const Header = () => {
  const { setToken } = useContext(adminContext);
  return (
    <>
      <div className="border-b-2 border-gray-200 pb-3 shadow-md">
        <div className="flex justify-between items-center container mx-auto py-3 px-5">
          <div>
            <Link to="/">
              <img className="h-14" src={photo.logo} alt="" />
            </Link>
          </div>
          <div>
            <button onClick={() => setToken("")}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
