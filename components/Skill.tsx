import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  imgsrc?: string;
};

export default function Skill({ imgsrc, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -40 : 40, opacity: 0.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <Image
          width={80}
          height={80}
          src={imgsrc as string}
          className="bg-slate-300/40 dark:bg-white rounded-full p-2 h-14 w-14 object-cover md:w-16 md:h-16 lg:w-20 lg:h-20 filter group-hover:grayscale  transition duration-500"
          alt="skills"
        />
      </motion.div>
    </div>
  );
}
