import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../../context/Context";
import { RxCross1 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { search, setSearch, searchShow, setSearchShow } =
    useContext(shopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === "/shop") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return searchShow && visible ? (
    <>
      <div className="flex items-center gap-5 justify-center min-h-48">
        <div className="inline-flex items-center shadow border border-gray-200 rounded-full px-5">
          <input
            className="sm:w-96 text-green-900 font-extrabold text-center outline-none p-3"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Seach Your Products"
          />
          <span>
            <IoSearchOutline className="text-2xl cursor-pointer" />
          </span>
        </div>

        <span>
          <RxCross1
            className="text-2xl cursor-pointer"
            onClick={() => setSearchShow(false)}
          />
        </span>
      </div>
    </>
  ) : null;
};

export default Search;
