import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Add from "./components/Add";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  return (
    <>
      <Layout>
        <Routes>
          {token === "" ? (
            <Route path="/" element={<Home />}>
              <Route path="add" element={<Add />} />
              <Route path="list" element={<List />} />
            </Route>
          ) : (
            <Route path="/login" element="" />
          )}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
