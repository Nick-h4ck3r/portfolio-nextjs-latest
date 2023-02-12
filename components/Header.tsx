import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center backdrop-blur-sm bg-white/5">
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
        <Image className="mr-2" src="/homeSlash.png" alt="me" width="35" height="35" />
        </a>

        {/* Social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/nickk2305/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/NickK2305"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Nick-h4ck3r"
          fgColor="white"
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
       className="flex flex-row items-center text-white cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
        <p className="hidden md:inline-flex text-sm text-white">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}
