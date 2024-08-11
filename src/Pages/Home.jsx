import React from "react";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
// import Receipe from "../Components/Receipe";

function Home() {
  return (
    <div className="bg-[url('/assets/homebg.webp')] w-full bg-cover">
      <Hero />
      <Products/>
      {/* <Receipe/> */}
    </div>
  );
}

export default Home;
