import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Experience
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin xl:space-x-14 ">
        <ExperienceCard clogo="/companyLogo/github-white.png" title="Open-source contributor" company="GitHub" />
        <ExperienceCard clogo="/companyLogo/lhc.jpeg" title="Founder and Creator" company="localhostcoders community"/>
        <ExperienceCard clogo="/companyLogo/wemakedevs.jpeg" title="Core team member" company="WeMakeDevs community" />
        <ExperienceCard clogo="/companyLogo/jkiapt.jpeg" title="Placement co-ordinator" company="Training and Placement Cell, JKIAPT" />
        
      </div>
    </motion.div>
  );
}
