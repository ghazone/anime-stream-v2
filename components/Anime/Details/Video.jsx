"use client"
// components/HLSPlayer.js
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const Video = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      // Check if the browser supports HLS natively
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      } else if (Hls.isSupported()) {
        // Initialize hls.js if the browser does not support HLS natively
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);

        // hls.on(Hls.Events.MANIFEST_PARSED, function () {
        //   video.play();
        // });
      }
    }

    // Clean up hls.js instance when the component unmounts
    return () => {
      if (Hls.isSupported()) {
        const video = videoRef.current;
        if (video && video.hls) {
          video.hls.destroy();
        }
      }
    };
  }, [src]);

  return (
      <video ref={videoRef} controls className="w-full" />
  );
};

export default Video;
