import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  imgsrc?: string;
};

export default function Skill({ imgsrc, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={imgsrc}
        className="bg-white rounded-full border border-gray-400 p-2 h-16 w-16 object-cover md:w-20 md:h-20 filter group-hover:grayscale group-hover:border-white transition duration-500 ease-in-out"
        alt=""
      />
      {/* <div className="absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="text-2xl md:text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </div>
  );
}
