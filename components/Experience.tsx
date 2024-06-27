import React from "react";
import { motion } from "framer-motion";

import { ExperienceCard } from "@/components/index";
import experiencesData from "../data/experience.json";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6">
        Experience
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 dark:scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-300/20 scrollbar-thumb-rounded-full">
        {experiencesData.experience?.map((experience) => (
          <ExperienceCard
            key={experience.company}
            clogo={experience.clogo}
            title={experience.title}
            company={experience.company}
            point1={experience.point1}
            point2={experience.point2}
            startDate={experience.startDate}
            endDate={experience.endDate}
          />
        ))}
      </div>
    </motion.div>
  );
}
