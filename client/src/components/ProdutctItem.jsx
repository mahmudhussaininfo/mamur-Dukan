import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../context/Context";

const ProdutctItem = ({ id, name, photo, price }) => {
  const { currency } = useContext(shopContext);

  return (
    <>
      <Link className="cursor-pointer" to={`/shop/${id}`}>
        <div className="text-center">
          <div className="overflow-hidden">
            <img
              className="hover:scale-110 transition-all ease-in-out w-full"
              src={photo}
              alt=""
            />
          </div>
          <p className="text-sm mt-3 mb-2">{name}</p>
          <span className="text-green-800 font-bold">
            {price} {currency} BDT
          </span>
        </div>
      </Link>
    </>
  );
};

export default ProdutctItem;
