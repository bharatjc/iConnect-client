import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Products() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 300,
  };
  return (
    <div className="bg-[url('/assets/heroimage01.jpg')] opacity-85 w-full bg-cover py-32 px-5">
        <h2 className="text-center italic text-red-900 md:text-xl mb-10">Experience Convenience Like Never Before.</h2>
      <div className="container">
        <Slider {...settings}>
          <div className="w-32 h-36 md:h-[50vh] bg-cover">
            <img
              src="./assets/bannerimage2.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="w-32 h-36 md:h-[50vh] bg-cover">
            <img
              src="./assets/bannerimage1.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="w-32 h-36 md:h-[50vh] bg-cover">
            <img
              src="./assets/bannerimage3.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="w-32 h-36 md:h-[50vh] bg-cover">
            <img
              src="./assets/bannerimage4.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="w-32 h-36 md:h-[50vh] bg-cover">
            <img
              src="./assets/bannerimage5.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="w-32 h-36 md:h-[50vh] bg-cover">
            <img
              src="./assets/bannerimage6.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Products;
