import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

const buttonClasses = "heroButton"

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey, Nikhil Kadam here.",
      "I build things for the web.",
      "I create content for community.",
      "I learn new things everyday.",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width={200}
        height={200}
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src="/extraImages/heroImage.jpeg"
        alt="nikhil kadam profile image"
      />

      <div className="z-20">
        <h2 className="text-sm text-gray-800 dark:text-gray-400 uppercase tracking-[8px] md:tracking-[15px] pb-2 font-outfit">
          Full-stack developer
        </h2>
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16 text-black dark:text-gray-200">
          <span className="mr-3 font-outfit text-black dark:text-gray-200">{text}</span>
          <Cursor cursorBlinking={false} />
        </h1>

        <div className="pt-4 lg:pt-4 font-outfit px-4 md:px-0">
          <Link href="#about">
            <button className={buttonClasses}>
              about
            </button>
          </Link>
          <Link href={"#experience"}>
            <button className={buttonClasses}>
              experience
            </button>
          </Link>
          <Link href={"#skills"}>
            <button className={buttonClasses}>
              skills
            </button>
          </Link>
          <Link href={"#projects"}>
            <button className={buttonClasses}>
              projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
