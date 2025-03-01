import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { shopContext } from "../context/Context";
import ProdutctItem from "./ProdutctItem";

const BestSeller = () => {
  const [bestProduct, setBestProduct] = useState([]);

  const { products } = useContext(shopContext);

  useEffect(() => {
    const bestSeller = products.filter((data) => data.bestseller);
    setBestProduct(bestSeller.slice(0, 6));
  }, []);

  return (
    <>
      <div className="container sm:mx-auto py-10 max-sm:px-4">
        {" "}
        <Title
          heading="Best Seller"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non"
        />
        {/* best seller */}
        <div className="py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-6">
          {bestProduct.map((item, index) => (
            <ProdutctItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
