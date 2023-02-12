import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Skills
      </h3>

      {/* <h3 className="absolute top-36 uppercase text-gray-400 tracking-[3px] text-sm">
        hover over a skill to see current proficiency
      </h3> */}

      <div className="pt-10 grid grid-cols-4 gap-5">
        <Skill imgsrc="/skillsLogos/html.png" directionLeft />
        <Skill imgsrc="/skillsLogos/css.png" directionLeft />
        <Skill imgsrc="/skillsLogos/js.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/bootstrap.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/c.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/docker.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/express.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/framer.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/git.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/github.png" directionLeft/>
        <Skill imgsrc="/skillsLogos/java.png" />
        <Skill imgsrc="/skillsLogos/kuber.png" />
        <Skill imgsrc="/skillsLogos/linux.png" />
        <Skill imgsrc="/skillsLogos/mongodb.png" />
        <Skill imgsrc="/skillsLogos/nextjs.png" />
        <Skill imgsrc="/skillsLogos/node.png" />
        <Skill imgsrc="/skillsLogos/postman.png" />
        <Skill imgsrc="/skillsLogos/python.png" />
        <Skill imgsrc="/skillsLogos/react.png" />
        <Skill imgsrc="/skillsLogos/sanityio.png" />
        <Skill imgsrc="/skillsLogos/tailwind.png" />
        <Skill imgsrc="/skillsLogos/typescript.png" />
        
      </div>
    </motion.div>
  );
}

export default Skills;
