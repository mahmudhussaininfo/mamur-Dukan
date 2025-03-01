import React, { useContext, useEffect, useState } from "react";
import { TbFilter, TbFilterOff } from "react-icons/tb";
import ProductTitle from "./ProductTitle";
import { shopContext } from "../context/Context";
import ProdutctItem from "./ProdutctItem";

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);

  const { products, search, searchShow } = useContext(shopContext);

  const [product, setProduct] = useState([]);

  // more produts
  const [visible, setVisible] = useState(12);

  // filter by category
  const [category, setCategory] = useState([]);

  // for sorting with price & rating
  const [type, setType] = useState("relavent");

  // handle category filter
  const handleCategoryFilter = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((data) => data !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // more buttons
  const loadMoreButtos = () => {
    setVisible((prev) => prev + 12);
  };

  // apply filter produts
  const applyFilterProducts = () => {
    let filterProduct = [...products];

    // for searching
    if (search && searchShow) {
      filterProduct = filterProduct.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      filterProduct = filterProduct.filter((item) =>
        category.includes(item.category)
      );
    }
    setProduct(filterProduct);
  };

  // for sorting products
  const sortProducts = () => {
    let sortedProduct = [...products];
    //
    // switch (type) {
    //   case "low-high":
    //     setProduct(
    //       sortedProduct.sort((a, b) => {
    //         return a.price - b.price;
    //       })
    //     );
    //     break;
    //   case "high-low":
    //     setProduct(
    //       sortedProduct.sort((a, b) => {
    //         return b.price - a.price;
    //       })
    //     );
    //     break;
    //   case "rating":
    //     setProduct(
    //       sortedProduct.sort((a, b) => {
    //         return b.rating - a.rating;
    //       })
    //     );
    //     break;
    //   default:
    //     applyFilterProducts();
    //     break;
    // }
    if (type === "low-high") {
      sortedProduct.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (type === "high-low") {
      sortedProduct.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (type === "rating") {
      sortedProduct.sort((a, b) => {
        return b.rating - a.rating;
      });
    } else {
      applyFilterProducts();
    }
    setProduct(sortedProduct);
  };

  useEffect(() => {
    sortProducts();
  }, [type]);

  useEffect(() => {
    applyFilterProducts();
  }, [category, search, searchShow]);

  return (
    <>
      <div className="container mx-auto 2xl:px-20 flex flex-col md:flex-row p-3 py-10">
        {/* show category filter button */}
        <button
          className="flex cursor-pointer items-center gap-3 mb-5 py-3 px-4 md:hidden"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? "Close" : "Filters"}
          {showFilter ? <TbFilterOff /> : <TbFilter />}
        </button>
        {/* Sidebar */}
        <div
          className={`w-full bg-white md:w-1/4 px-4 ${
            showFilter ? "" : "max-sm:hidden"
          }`}
        >
          <h1 className="max-sm:hidden mb-5 text-3xl font-semibold">Filters</h1>
          <div className="border border-gray-200 rounded p-4">
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="men"
                  value={"Men"}
                  onChange={handleCategoryFilter}
                />
                <label htmlFor="men">Men</label>
              </li>
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="women"
                  value={"Women"}
                  onChange={handleCategoryFilter}
                />
                <label htmlFor="women">Women</label>
              </li>
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="kid"
                  value={"Kids"}
                  onChange={handleCategoryFilter}
                />
                <label htmlFor="kid">Kids</label>
              </li>
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="random"
                  value={"random"}
                  onChange={handleCategoryFilter}
                />
                <label htmlFor="random">Random</label>
              </li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded p-4 mt-5">
            <h4 className="font-semibold mb-2">Types</h4>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 items-center">
                <input type="checkbox" />
                Fruites
              </li>
              <li className="flex gap-2 items-center">
                <input type="checkbox" />
                Drinks
              </li>
              <li className="flex gap-2 items-center">
                <input type="checkbox" />
                Kids
              </li>
              <li className="flex gap-2 items-center">
                <input type="checkbox" />
                Random
              </li>
            </ul>
          </div>
        </div>

        {/* product listing */}
        <div className="flex-1 px-3">
          <div className="flex justify-between items-center mb-3">
            <ProductTitle title={"All Produtcs"} />
            <div>
              <select
                className="border text-sm border-gray-300 p-3 cursor-pointer outline-none"
                name=""
                id=""
                defaultValue={"relavent"}
                onChange={(e) => setType(e.target.value)}
              >
                <option className="" value="relavent">
                  Sort By: Relevent
                </option>
                <option className="" value="low-high">
                  Low to High
                </option>
                <option className="" value="high-low">
                  High to Low
                </option>
                <option className="" value="rating">
                  Rating
                </option>
              </select>
            </div>
          </div>

          {/* products rendering */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-6">
            {product.slice(0, visible).map((item, index) => (
              <ProdutctItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>

          {/* load more buttons */}
          <div>
            {visible < product.length && (
              <div className="flex justify-center mt-20">
                <button
                  className="py-3 px-6 cursor-pointer bg-green-700 text-white rounded-md"
                  onClick={loadMoreButtos}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
