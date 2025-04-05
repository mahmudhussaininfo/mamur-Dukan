import { NavLink } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { PiListMagnifyingGlassLight } from "react-icons/pi";

const Sidebar = () => {
  return (
    <>
      <div className="w-[14%] min-h-screen border-r-2 border-gray-200">
        <div className="flex flex-col gap-4">
          <NavLink
            className="flex items-center gap-3 p-3 border border-gray-200 justify-center"
            to="add"
          >
            <span className="">
              <IoAdd />
            </span>
            <span className="hidden md:block">Add Products</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-3 p-3 border border-gray-200 justify-center"
            to="list"
          >
            <span className="">
              <IoAdd />
            </span>
            <span className="hidden md:block">List Products</span>
          </NavLink>
          <NavLink
            className="flex items-center gap-3 p-3 border border-gray-200 justify-center"
            to="order"
          >
            <span className="">
              <PiListMagnifyingGlassLight />
            </span>
            <span className="hidden md:block">Order Lists</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
