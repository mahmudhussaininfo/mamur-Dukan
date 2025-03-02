import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/Context";
import ProdutctItem from "./ProdutctItem";
import Title from "./Title";

const ReletedProducts = ({ category, id }) => {
  const { products } = useContext(shopContext);
  const [releted, setReleted] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let product = [...products];
      product = product.filter(
        (item) => item._id !== id && item.category === category
      );
      setReleted(product.slice(0, 4));
    }
  }, [products]);
  return (
    <>
      <div className="py-10 container mx-auto max-sm:px-5">
        <Title heading="Releted Products" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-6">
          {releted.map((item, index) => (
            <ProdutctItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReletedProducts;
