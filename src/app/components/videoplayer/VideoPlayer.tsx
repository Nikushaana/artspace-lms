"use client";

import React, { useRef, useState } from "react";

export default function VideoPlayer({ item }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const handleMouseOver = () => {
    // setIsHovered(true);
    // setIsMuted(false);
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    // setIsHovered(false);
    // setIsMuted(true);
  };

  const handleVideoEnded = () => {
    // Restart the video when it ends
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative h-full w-full bg-[#010125] rounded-[20px]">
      <video
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        autoPlay={true}
        onEnded={handleVideoEnded}
        muted={isMuted}
        controls={isHovered}
        className={`w-full flex items-center h-full object-cover justify-center`}
        ref={videoRef}
        width="100%"
        height="100%"
      >
        <source
          // src={`${process.env.NEXT_PUBLIC_API_URL}/${item.url}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
