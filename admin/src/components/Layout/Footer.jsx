import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="border-t-2 border-gray-200">
        <div className="container mx-auto py-5">
          <p className="text-center">
            {`Copyright ${year} Mahmud Hussain - All Right Reserved`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
