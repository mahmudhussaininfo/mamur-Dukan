import React from "react";

const Title = ({ heading, text }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-4">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-4xl uppercase mb-3">{heading}</h1>
          <hr className="w-40 max-sm:hidden" />
        </div>
        <p className="capitalize sm:w-[50%] text-center text-sm">{text}</p>
      </div>
    </>
  );
};

export default Title;
