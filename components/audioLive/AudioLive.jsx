import React from "react";

//INTERNAL IMPORT
import Style from "./AudioLive.module.css";
import AudioCard from "./audioCard/AudioCard";
import AudioCardSmall from "./audioCardSmall/AudioCardSmall";

const AudioLive = () => {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>
        <div className={Style.audioLive_box_right}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
};

export default AudioLive;