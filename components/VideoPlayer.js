"use client";
import dynamic from "next/dynamic";
import React from "react";
import styles from "../styles/ReactPlayer.module.scss";

const VidPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  //video path
  let videosrc = "/videos/video.mp4";

  return (
    <div className={styles.reactPlayer}>
      <VidPlayer
        wrapper="div"
        width="100%"
        height="100%"
        url={videosrc}
        controls={true}
        // light is usefull incase of dark mode
        light={false}
        // picture in picture
        pip={true}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
