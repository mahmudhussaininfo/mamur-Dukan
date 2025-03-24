import React, { useState } from "react";
import { photo } from "../utils/utils.js";

const Add = () => {
  const [image, setImage] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div>
          <h1>Upload Image</h1>
          <input type="file" />
          <img className="w-52 object-cover" src={photo.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Add;
