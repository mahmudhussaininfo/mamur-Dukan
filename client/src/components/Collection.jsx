import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/Context";
import Title from "./Title";
import ProdutctItem from "./ProdutctItem";

const Collection = () => {
  const { products } = useContext(shopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const latest = products.slice(0, 9);
    setLatestProducts(latest);
  }, []);

  return (
    <>
      <div className="container sm:mx-auto py-10 max-sm:px-4">
        <div>
          <Title
            heading="Latest Collection"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>

        {/* products rendering */}
        <div className="py-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-6">
          {latestProducts.map((item, index) => (
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

export default Collection;
