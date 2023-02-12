import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="ml-6 absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        src="https://www.nikhilkadam.me/assets/img/profile-img.jpg"
        className="-mb-32 md:mb-0 md:ml-16 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className=" space-y-10 px-0 md:px-20">
        <h4 className="text-3xl font-semibold">heres the profile summary.</h4>
        <p className="text-sm md:text-base">
          I am a Undergraduate student pursuing B.Tech. in Computer Science and
          Engineering at JK Institute of Applied Physics and Technology,
          University of Allahabad, Prayagraj, Uttar Pradesh. <br />
          <br /> Please feel free to get in touch with me if you are interested
          in connecting.
        </p>
      </div>
    </motion.div>
  );
}
