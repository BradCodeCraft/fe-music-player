import Image from "next/image";
import albumCover from "./assets/albumCover.jpeg";
import { Children } from "react";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src={albumCover}
        alt="Album Cover"
        className="fixed -z-50 min-w-full min-h-screen blur-lg"
        style={{ transform: "scale(1.1)" }}
      />

      <Container></Container>
    </div>
  );
}
