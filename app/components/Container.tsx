import React from "react";
import albumCover from "../assets/albumCover.jpeg";
import Image from "next/image";

export default function Container() {
  return (
    <div className="fixed -z-40 min-w-full min-h-screen flex justify-center items-center">
      {/* Container Background */}
      <div className="fixed -z-40 bg-transparent opacity-100 min-w-[80%] min-h-[80vh]">
        <div className="bg-black opacity-50 min-w-full min-h-[15vh] rounded-t-2xl" />
        <div className="bg-black min-w-full min-h-[65vh] rounded-b-2xl" />
      </div>

      <div className="mt-40 min-w-[80%] min-h-[65vh] flex flex-col items-center">
        {/* Song Cover */}
        <div className="-mt-20 bg-blue-200 w-[200px] h-[200px] rounded-full flex justify-center items-center overflow-hidden border-2 border-white mb-5">
          <Image
            src={albumCover}
            alt="Album Cover"
            className="min-w-full min-h-full"
          />
        </div>
        <h1 className="text-white text-4xl">Age to Age</h1>

        <h2 className="text-gray-500 mt-5">Treeline Music</h2>

        {/* Controls Row */}
        {/* <SongControl /> */}
      </div>
    </div>
  );
}
