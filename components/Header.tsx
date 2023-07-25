import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-3 flex items-start justify-around  mx-auto z-50 xl:items-center backdrop-blur-sm bg-[#1d1d1f] bg-opacity-70 ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          type: "tween",
        }}
        className="flex flex-row items-center"
      >
        <a href="#hero">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#a9a9a9"
            className="bi bi-house-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </a>

        {/* Social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/nickk2305/"
          fgColor="#a9a9a9"
          bgColor="transparent"
          className="ml-3"
        />
        <SocialIcon
          url="https://www.twitter.com/NickK2305"
          fgColor="#a9a9a9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Nick-h4ck3r"
          fgColor="#a9a9a9"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          type: "tween",
        }}
        className="flex flex-row items-center text-white cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#a9a9a9"
          bgColor="transparent"
          url="#contact"
        />
        <p className="hidden md:inline-flex text-sm text-[#a9a9a9]">
          <a href="#contact"> Get in touch </a>
        </p>
      </motion.div>
    </header>
  );
}
