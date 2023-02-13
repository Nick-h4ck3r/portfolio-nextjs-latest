import { motion } from "framer-motion";
import React from "react";

type Props = {
  clogo: string;
  title: string;
  company: string;
  point1?: string;
  point2?: string;
  startDate: string;
  endDate: string;
};

export default function ExperienceCard({
  clogo,
  title,
  company,
  point1,
  point2,
  startDate,
  endDate,
}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[450px] xl:w-[500px]  snap-center backdrop-blur-sm bg-white/5 p-10 transition-opacity duration-200 overflow-hidden py-14 mt-10">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={clogo}
        className="object-cover h-28 w-28 rounded-full xl object-center xl:w-[150px] xl:h-[150px]"
        alt=""
      />

      <div className="px-0 md:px-10 text-left">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="font-bold text-md mt-2 text-gray-300">{company}</p>

        {/* Tech stack used in this work : */}
        {/* <div className="flex space-x-2 my-2">
          <img src={imgURL} className=" w-10 h-10 rounded-full" alt="" />
          <img src={imgURL} className=" w-10 h-10 rounded-full" alt="" />
          <img src={imgURL} className=" w-10 h-10 rounded-full" alt="" />
        </div> */}

        <p className="uppercase py-2 text-sm text-gray-300 mt-2">{startDate} - {endDate}</p>

        <ul className="list-disc space-y-3 ml-5 text-md mt-3 font-poppins">
          <li>{point1}</li>

          <li>{point2}</li>
        </ul>
      </div>
    </article>
  );
}
