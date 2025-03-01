import React from "react";

const ProductTitle = ({ title }) => {
  return (
    <>
      <div className="">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold sm:text-3xl text-xl uppercase">
            {title}
          </h1>
          <hr className="w-30 max-sm:hidden" />
        </div>
      </div>
    </>
  );
};

export default ProductTitle;
