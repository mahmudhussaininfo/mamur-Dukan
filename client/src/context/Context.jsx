import { createContext, useState } from "react";
import { products } from "../utils/utils.js";

export const shopContext = createContext();

const ContextProvider = ({ children }) => {
  // Initialize your state here
  const currency = "৳";

  const [search, setSearch] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const values = {
    currency,
    products,
    search,
    setSearch,
    searchShow,
    setSearchShow,
  };
  return <shopContext.Provider value={values}>{children}</shopContext.Provider>;
};

export default ContextProvider;
