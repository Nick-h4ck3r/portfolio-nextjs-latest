import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              className="w-[300px]"
              src="https://media.istockphoto.com/id/520619396/photo/isolated-shot-of-opened-blank-cardboard-box-on-white-background.jpg?s=612x612&w=0&k=20&c=SEWCBNgOWaQH-sBqq5UnmXXFxhpMPdS9btt6MqX-85c="
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Project {i + 1}: ABC
              </h4>

              <p className="text-sm text-center md:text-lg md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor id velit laudantium dolores quas. Perferendis vel, dolore eligendi quidem, omnis cupiditate at, sit veniam tempore velit laborum ducimus sequi?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
