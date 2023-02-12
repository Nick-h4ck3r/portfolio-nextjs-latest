import { motion } from "framer-motion";
import React from "react";

const imgURL =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1671209654236/2TRB5sdiZ.png?w=500&h=500&fit=crop&crop=faces&auto=compress";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[450px] xl:w-[500px]  snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={imgURL}
        className="h-32 w-32 rounded-full xl object-center object-cover xl:w-[150px] xl:h-[150px]"
        alt=""
      />

      <div className="px-0 md:px-10 text-left">
        <h4 className="text-2xl font-bold">CEO of ABC</h4>
        <p className="font-semibold text-md mt-1">ABC</p>

        <div className="flex space-x-2 my-2">
          <img src={imgURL} className=" w-10 h-10 rounded-full" alt="" />
          <img src={imgURL} className=" w-10 h-10 rounded-full" alt="" />
          <img src={imgURL} className=" w-10 h-10 rounded-full" alt="" />
        </div>

        <p className="uppercase py-2 text-sm text-gray-300">2019 - 2020</p>

        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>points</li>
          <li>points</li>
          <li>points</li>
          <li>points</li>
        </ul>
      </div>
    </article>
  );
}
