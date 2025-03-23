import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import Add from "./components/Add";
import List from "./components/List";
import { useState } from "react";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {
  const [token, setToken] = useState("4");
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
            <Route path="/" element={<Login />} />
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
