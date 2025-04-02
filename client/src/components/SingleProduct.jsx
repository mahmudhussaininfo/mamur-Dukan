import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/Context";
import { ImHappy } from "react-icons/im";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrSecure } from "react-icons/gr";
import ReletedProducts from "./ReletedProducts";

const SingleProduct = () => {
  const { products, currency, addCart } = useContext(shopContext);
  const { id } = useParams();
  const [productData, setProductData] = useState(false);
  console.log(productData);

  const [img, setImg] = useState("");
  const [size, setSize] = useState("");

  // fetch product
  const fetchProduct = async () => {
    await products.map((item) => {
      if (item._id === id) {
        setProductData(item);
        setImg(item.photo[0]);
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
      <div className="pt-10 transition-opacity ease-in duration-500 opacity-100 container mx-auto">
        <div className="flex gap-8 flex-col sm:flex-row max-sm:px-5">
          {/*====================== products Image ===============================*/}
          <div className="flex flex-1 gap-5 flex-col-reverse sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-hidden justify-between sm:justify-normal w-full sm:w-[23%]">
              {productData?.photo?.map((item, index) => (
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
            <h1 className="text-2xl font-semibold">{productData.name}</h1>
            <div className="flex gap-5">
              <p className="text-lg font-semibold text-gray-600">
                Price: {productData.price}
                {currency} BDT
              </p>
              <p className="text-lg font-semibold text-gray-600">
                Category: {productData.category}
              </p>
            </div>
            <div className="flex flex-col gap-2 py-3">
              <h2 className="text-xl font-semibold mb-2">Select Size</h2>
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
            <button
              onClick={() => addCart({ id: productData._id, size })}
              className="bg-green-600 font-semibold text-white px-5 py-2 rounded-md"
            >
              Add to Cart
            </button>
            {/* ============ Product Extra Text =================== */}

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <span>
                  <ImHappy className="sm:text-2xl" />
                </span>
                <p className="sm:text-xl">100% Original product.</p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <CiDeliveryTruck className="sm:text-2xl" />
                </span>
                <p className="sm:text-xl">
                  Cash on delivery is available on this product.
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <GrSecure className="sm:text-2xl" />
                </span>
                <p className="sm:text-xl">
                  Easy return and exchange policy within 7 days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*==================== Description & Review =====================*/}
        <div className="mt-20">
          <div className="flex">
            <b className="border border-gray-200 px-5 py-3 text-sm">
              Description
            </b>
            <b className="border border-gray-200 px-5 py-3 text-sm">Review</b>
          </div>
          <div className="flex flex-col gap-2 border text-sm border-gray-200 p-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              nihil est dolorem nobis harum commodi modi libero ab ducimus
              aperiam consequuntur. Ea explicabo commodi architecto cum nihil!
              Consequatur sapiente molestias unde sint ipsa velit natus
              asperiores nemo minima odit. Amet!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              explicabo ullam sint. Hic, enim odio? Assumenda consectetur
              incidunt doloribus aperiam.
            </p>
          </div>
        </div>
      </div>

      {/*==================== Related Products =====================*/}
      <div className="mt-20">
        <ReletedProducts category={productData.category} id={productData._id} />
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
