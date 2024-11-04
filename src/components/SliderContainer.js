import React, { useState } from 'react';
import Slide from './Slide';
import Slide2 from './slide2';
import SlideController from './SlideController';

const SliderContainer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div>
      <Slide isPlaying={isPlaying} />
      <Slide2 isPlaying={isPlaying} />
      <SlideController isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
};

export default SliderContainer;
