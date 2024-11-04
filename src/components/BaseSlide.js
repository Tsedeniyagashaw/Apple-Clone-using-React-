import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';

function BaseSlide({ slides, settings, gray }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      if (settings.isPlaying) {
        sliderRef.current.slickPlay();
      } else {
        sliderRef.current.slickPause();
      }
    }
    
  }, [settings.isPlaying]);

  return (
    <div className="slide-content">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, key) => (
          <div key={key} className={` ${gray ? 'slide':''} `}>
            {slide.content}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BaseSlide;
