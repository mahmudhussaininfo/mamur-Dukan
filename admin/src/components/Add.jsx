import React, { useRef, useState } from "react";
import { GrGallery } from "react-icons/gr";

const Add = () => {
  const [image, setImage] = useState([]);
  const fileRef = useRef(null);

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImage((prev) => [...prev, ...newImages]);
  };

  // remove image
  const removeImage = (index) => {
    setImage(image.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="flex flex-col">
        {/* upload images */}
        <div className="py-3">
          <h1>Upload Image</h1>
          <input
            type="file"
            className="hidden"
            ref={fileRef}
            multiple
            onChange={handleImageChange}
          />

          <div onClick={handleClick}>
            <GrGallery className="mb-5 text-7xl border border-gray-300 p-3 cursor-pointer" />
          </div>
          <div className="flex gap-5">
            {image.map((img, index) => (
              <div key={index} className="relative">
                <img className="w-40 object-cover" src={img} alt="" />
                <button
                  className="cursor-pointer absolute top-0 right-0 bg-gray-400 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs hover:text-xl"
                  onClick={() => removeImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-2">Product Name</h2>
          <input
            type="text"
            placeholder="Product Name"
            className="border w-full sm:w-[25%] border-gray-200 rounded-md outline-none p-2"
          />
        </div>
        <div>
          <h2 className="py-2">Product Description</h2>
          <textarea
            placeholder="Product Description"
            className="border w-full sm:w-[25%] border-gray-200 rounded-md outline-none p-2 h-40"
          />
        </div>

        {/* dropdown */}
        <div className="flex gap-5">
          <div>
            <h2>Product Category</h2>
            <select className="border w-full border-gray-200 rounded-md outline-none p-2">
              <option value="">Select Category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </div>
          <div>
            <h2>Product Category</h2>
            <select className="border w-full border-gray-200 rounded-md outline-none p-2">
              <option value="">Select Category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </div>
          <div>
            <h2>Product Category</h2>
            <select className="border w-full border-gray-200 rounded-md outline-none p-2">
              <option value="">Select Category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
