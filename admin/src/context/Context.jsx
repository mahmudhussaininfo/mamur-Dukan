import { createContext, useEffect, useState } from "react";
import { products } from "../utils/utils.js";
import Swl from "sweetalert2";
import axios from "axios";

export const adminContext = createContext();
const BASE = import.meta.env.VITE_BACKEND_URL;

const ContextProvider = ({ children }) => {
  axios.defaults.withCredentials = true;
  const [token, setToken] = useState(
    localStorage.getItem("Token") ? localStorage.getItem("Token") : ""
  );
  useEffect(() => {
    localStorage.setItem("Token", token);
  }, [token]);
  const values = {
    BASE,
    token,
    setToken,
  };
  return (
    <adminContext.Provider value={values}>{children}</adminContext.Provider>
  );
};

export default ContextProvider;
