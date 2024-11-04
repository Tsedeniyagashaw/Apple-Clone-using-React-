import React from "react";
import { Slidelist } from "./Slidelist";
import BaseSlide from "./BaseSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide({ isPlaying }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "10%",
    isPlaying,
  };

  const Singleslide = ({ Image, text1, text2, text3 }) => {
    return (
      <div className="slide-item mx-lg-2 mx-1 h-100 position-relative">
        <img src={Image} className="img-fluid myimg" alt="slide" />
        <div className="slidetext position-absolute px-3 bottom-0 start-0 d-flex flex-column flex-md-row flex-lg-row justify-content-center text-center">
          <div className="order-md-1 order-2">
            <p className="bg-white btn btn-oval mybutton rounded-pill">
              {text1}
            </p>
          </div>
          <div className="d-lg-flex mt-2 mb-0 d-md-flex order-md-2 order-1 mx-2 mb-1">
            <p className="text-white fw-bolder mb-1">{text2}</p>
            <p className="text-white mx-1 mb-0">{text3}</p>
          </div>
        </div>
      </div>
    );
  };

  const slides = Slidelist.map((slideItem, key) => ({
    content: (
      <Singleslide
        key={key}
        Image={slideItem.Image}
        text1={slideItem.text1}
        text2={slideItem.text2}
        text3={slideItem.text3}
      />
    ),
  }));

  return <BaseSlide slides={slides} settings={settings} gray={true} />;
}

export default Slide;