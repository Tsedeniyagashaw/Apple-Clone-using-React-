import React from "react";


const SlideController = ({ isPlaying, setIsPlaying }) => {
  const togglePlayPause = () => {

    setIsPlaying(prevState => {
      const newState = !prevState;
      
      return newState;
    });
  };

  return (
    <div className="slide-controller-container" >
      <div
        className="play-pause-button d-flex justify-content-center align-items-center p-1 me-2 rounded-circle "
        onClick={togglePlayPause}
        
      >
        {isPlaying ? (
          <svg className="fs-bolder" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default SlideController;
