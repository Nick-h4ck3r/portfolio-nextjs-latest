import { motion } from "framer-motion";
import React from "react";

type Props = {
  data: Array<any>;
};

export default function Projects({ data }: Props) {
  const projects = [1,2,3,4,5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin">
        {data.map((project: any, i: any) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen mt-10"
          >
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[300px]"
              src={project.imgurl}
              alt=""
            />

            <div className="px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl text-center mt-7 font-semibold">
                {project.title}
              </h4>

              <p className="text-sm text-center md:text-lg md:text-left mt-7 px-7">
                {project.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
