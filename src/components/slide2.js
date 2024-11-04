import React from 'react';
import { Slidelist2 } from './slidelist2';
import BaseSlide from './BaseSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slide2({ isPlaying }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    isPlaying,
    responsive: [
      {
        breakpoint: 768, // When screen size is below 768px
        settings: {
          slidesToShow: 3, // Show 3 slides
        },
      },
      {
        breakpoint: 480, // Optional: Further customization for very small screens
        settings: {
          slidesToShow: 3, // Show 1 slide
        },
      },
    ],
  };

  const slide2 = Slidelist2.map((slide2, key) => ({
    content: (
 <div className='singleslide-container2 position-relative mt-5'>
      <div className="infinite-slide d-flex flex-column mx-1" key={key}>
        <div className="singleslide-image2 mx-0">
          <img src={slide2.Image} alt="Slide" className="img-fluid" />
        </div>
        <div className="singleslide-text2 w-100 d-lg-flex justify-start d-none">
          <p>{slide2.text}</p>
        </div>
      </div>
</div>
    ),
  }));

  return <BaseSlide slides={slide2} settings={settings} />;
}

export default Slide2;
