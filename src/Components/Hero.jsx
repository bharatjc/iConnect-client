import React from "react";

function Hero() {
  return (
    <div className="h-[calc(100vh-75px)] flex flex-col justify-center items-center">
      <div className="md:flex items-center justify-between my-32 md:my-52  font-semibold gap-5">
      <div className="px-5 py-2 mb-5 bg-emerald-800 text-white cursor-pointer">ORDER ONLINE</div>
      <div className="px-5 py-2 mb-5 bg-white cursor-pointer">BOOK A TABLE</div>
      <div className="px-5 py-2 mb-5 bg-orange-400 cursor-pointer">BOOK AN EVENT</div>
      </div>
      <div className="text-white px-5 text-center md:text-xl italic">
      iConnect: Seamlessly Connecting Cafes and Customers.
      </div>
    </div>
  );
}

export default Hero;
