import React from "react";
import { BsEmojiTearFill } from "react-icons/bs";

const Error = () => {
  return (
    <>
      <div className="flex flex-col gap-3 items-center justify-center min-h-screen">
        <BsEmojiTearFill className="text-9xl text-red-600" />
        <h1 className="text-2xl">Error 404</h1>
        <p>Page not found</p>
      </div>
    </>
  );
};

export default Error;
