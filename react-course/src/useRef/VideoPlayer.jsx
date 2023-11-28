import React, { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls
        src="D:\mexico\GH010001.MP4" 
      ></video>
      <button onClick={handlePlayPause}>
        {videoRef.current?.paused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
};

export default VideoPlayer;
