import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { SkillsScrolling } from "./SkillsScrolling";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl z-10">
        Skills
      </h3>

      {/* <div className="pt-20 grid grid-cols-4 gap-5 md:gap-6 lg:gap-7 md:grid-cols-5 lg:grid-cols-6 md:pt-28">
        <Skill
          imgsrc="/skillsLogos/html.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/css.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/js.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/bootstrap.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/c.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/docker.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/express.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/framer.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/git.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/github.png"
          directionLeft
        />
        <Skill
          imgsrc="/skillsLogos/firebase.png"
          directionLeft
        />
        <Skill imgsrc="/skillsLogos/java.png" />
        <Skill imgsrc="/skillsLogos/kuber.png" />
        <Skill imgsrc="/skillsLogos/linux.png" />
        <Skill imgsrc="/skillsLogos/mongodb.png" />
        <Skill imgsrc="/skillsLogos/next-js.png" />
        <Skill imgsrc="/skillsLogos/node.png" />
        <Skill imgsrc="/skillsLogos/postman.png" />
        <Skill imgsrc="/skillsLogos/python.png" />
        <Skill imgsrc="/skillsLogos/react.png" />
        <Skill imgsrc="/skillsLogos/sanityio.png" />
        <Skill imgsrc="/skillsLogos/tailwind.png" />
        <Skill imgsrc="/skillsLogos/typescript.png" />
      </div> */}
      <SkillsScrolling />
    </motion.div>
  );
}

export default Skills;
