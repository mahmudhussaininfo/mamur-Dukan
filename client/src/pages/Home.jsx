import React from "react";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <BestSeller />
      <Policy />
      <Newsletter />
    </>
  );
};

export default Home;
