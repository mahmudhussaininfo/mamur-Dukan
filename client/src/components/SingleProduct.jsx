import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/Context";

const SingleProduct = () => {
  const { products } = useContext(shopContext);
  const { id } = useParams();
  const [productData, setProductData] = useState(false);
  const [img, setImg] = useState("");
  const [size, setSize] = useState("");

  // fetch product
  const fetchProduct = async () => {
    await products.map((item) => {
      if (item._id === id) {
        setProductData(item);
        setImg(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [id, products]);

  return productData ? (
    <>
      {/* ==================product Data======================= */}
      <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
        <div className="flex gap-8 flex-col sm:flex-row container mx-auto max-sm:px-5">
          {/*====================== products Image ===============================*/}
          <div className="flex flex-1 gap-5 flex-col-reverse sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-full sm:w-[23%]">
              {productData.image.map((item, index) => (
                <img
                  className="w-[24%] sm:w-full mb-3 cursor-pointer shrink-0"
                  key={index}
                  src={item}
                  onClick={() => setImg(item)}
                />
              ))}
            </div>
            <div className="w-full">
              <img className="w-full h-auto shrink-0" src={img} alt="" />
            </div>
          </div>

          {/*============== products details ==============*/}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{productData.name}</h1>
            <div className="flex gap-5">
              <p className="text-lg font-semibold text-gray-600">
                Price: ${productData.price}
              </p>
              <p className="text-lg font-semibold text-gray-600">
                Category: {productData.category}
              </p>
            </div>
            <div className="flex flex-col gap-2 py-3">
              <h2>Select Size</h2>
              <div className="flex gap-3">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`bg-gray-200 px-3 py-2 rounded-md cursor-pointer ${
                      item === size ? "bg-green-500 text-white" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-lg text-gray-600 py-5">
              Description: {productData.description}
            </p>
            <button className="bg-green-600 font-semibold text-white px-5 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div>
        <p>No Products Found</p>
      </div>
    </>
  );
};

export default SingleProduct;
