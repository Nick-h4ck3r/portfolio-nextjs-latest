import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const imgURl =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1671209654236/2TRB5sdiZ.png?w=500&h=500&fit=crop&crop=faces&auto=compress";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, Nikhil Kadam here.",
      "I'm a developer.",
      "I'm a creator.",
      "I'm an engineer.",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src={imgURl}
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-400 uppercase tracking-[9px] md:tracking-[15px] pb-2">
          Software Engineer
        </h2>
        <h1 className="pt-2 text-4xl lg:text-6xl font-semibold px-16">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#aaaaaa" />
        </h1>

        <div className="pt-3 lg:pt-4">
          <Link href="#about">
            <button className="heroButton">about</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
