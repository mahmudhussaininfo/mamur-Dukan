import React, { useContext, useRef, useState } from "react";
import { GrGallery } from "react-icons/gr";
import { adminContext } from "../context/Context";
import axios from "axios";

const Add = () => {
  const { BASE, token } = useContext(adminContext);

  const [image, setImage] = useState([]);
  const fileRef = useRef(null);

  // Category-wise subcategories
  const subCategories = {
    Men: ["Tshirt", "Pants", "Shoes"],
    Women: ["Sari", "Mexi", "Burqa"],
    Kids: ["Tshirt", "Pants", "Half Pant"],
  };

  const [input, setInput] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Tshirt",
    sizes: [],
    bestSeller: true,
    salary: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      // Reset subCategory when category changes
      ...(name === "category" && { subCategory: subCategories[value][0] }),
    }));
  };

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

  // for sizes
  const sizeModels = ["S", "M", "X", "L", "XL", "XXL"];

  // Handle size selection
  const handleSizeClick = (size) => {
    setInput((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((item) => item !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("subCategory", input.subCategory);
    formData.append("sizes", JSON.stringify(input.sizes));
    formData.append("bestSeller", input.bestSeller);
    formData.append("salary", input.salary);
    // Append images to form data
    const files = fileRef.current.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }

    try {
      const { data } = await axios.post(`${BASE}/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      if (data.success) {
        console.log(data);
      } else {
        console.log("Error: Failed to create product");
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="flex flex-col py-3 px-5">
        <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
              name="name"
              value={input.name}
              className="border w-full sm:w-[35%] border-gray-200 rounded-md outline-none p-2"
            />
          </div>
          <div>
            <h2 className="py-2">Product Description</h2>
            <textarea
              onChange={handleChange}
              name="description"
              value={input.description}
              placeholder="Product Description"
              className="border w-full sm:w-[35%] border-gray-200 rounded-md outline-none p-2 h-40"
            />
          </div>
          {/* dropdown */}
          <div className="flex gap-5">
            <div>
              <h2>Product Category</h2>
              <select
                onChange={handleChange}
                name="category"
                value={input.category}
                className="border w-full border-gray-200 rounded-md outline-none p-2"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div>
              <h2>Sub Category</h2>
              <select
                onChange={handleChange}
                name="subCategory"
                value={input.subCategory}
                className="border w-full border-gray-200 rounded-md outline-none p-2"
              >
                {subCategories[input.category]?.map((sub, index) => (
                  <option key={index} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h2>Price</h2>
              <input
                type="number"
                placeholder="500"
                onChange={handleChange}
                name="salary"
                value={input.salary}
                className="border w-full sm:w-[50%] border-gray-200 rounded-md outline-none p-2"
              />
            </div>
          </div>
          <div className="mt-5">
            <h2>Product Sizes</h2>
            <div className="flex gap-4 mt-2">
              {sizeModels.map((size) => (
                <span
                  key={size}
                  className={`cursor-pointer p-2 ${
                    input.sizes.includes(size)
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="bestSeller" className="cursor-pointer">
              <input
                name="bestSeller"
                checked={input.bestSeller}
                onChange={handleChange}
                id="bestSeller"
                className="cursor-pointer"
                type="checkbox"
              />
              Add to BestSeller
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 mt-5 cursor-pointer text-white px-5 py-2 rounded"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Add;
