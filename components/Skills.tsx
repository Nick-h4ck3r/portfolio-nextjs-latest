import { motion } from "framer-motion";
import { Skillscrolling as SkillsScrolling } from "@/components/index";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl z-10">
        Skills
      </h3>

      <SkillsScrolling />
    </motion.div>
  );
}
