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
        initial={{ x: directionLeft ? -40 : 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={imgsrc}
        className="bg-white rounded-full border border-gray-400 p-2 h-14 w-14 object-cover md:w-16 md:h-16 lg:w-20 lg:h-20 filter group-hover:grayscale group-hover:border-white transition duration-500"
        alt="skills"
      />
    </div>
  );
}
