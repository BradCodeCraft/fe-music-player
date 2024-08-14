"use client";

import React from "react";
import nextIcon from "../assets/icons/next-icon.svg";
import pauseIcon from "../assets/icons/pause-icon.svg";
import playIcon from "../assets/icons/play-icon.svg";
import previousIcon from "../assets/icons/previous-icon.svg";
import repeatIcon from "../assets/icons/repeat-icon.svg";
import replayIcon from "../assets/icons/replay-icon.svg";
import soundOffIcon from "../assets/icons/sound-off-icon.svg";
import soundOnIcon from "../assets/icons/sound-on-icon.svg";
import Image from "next/image";

export default function SongControl() {
  return (
    <div className="min-w-full min-h-[100px] flex items-center">
      <div className="w-[100%] flex justify-center pl-[4.5rem] md:pl-[9.5rem] lg:pl-[14.5rem] 2xl:pl-[24.5rem]">
        <button className="mx-2.5 hover:cursor-pointer">
          <Image src={replayIcon} alt="Replay Button" />
        </button>
        <button className="mx-2.5 hover:cursor-pointer">
          <Image src={previousIcon} alt="Previous Button" />
        </button>
        <button className="mx-2.5 bg-gray-500 p-2.5 rounded-full hover:cursor-pointer">
          <Image src={pauseIcon} alt="Pause Button" />
        </button>
        <button className="mx-2.5 hover:cursor-pointer">
          <Image src={nextIcon} alt="Next Button" />
        </button>
        <button className="mx-2.5 hover:cursor-pointer">
          <Image src={repeatIcon} alt="Repeat Button" />
        </button>
      </div>

      <div className="w-[30%] flex justify-center items-center">
        <button className="mx-2.5 hover:cursor-pointer">
          <Image src={soundOnIcon} alt="Sound On Button" />
        </button>

        <input type="range" min={0} max={100} step={1} className="w-32" />
      </div>
    </div>
  );
}
