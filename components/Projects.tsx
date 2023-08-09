import { motion } from "framer-motion";
import React from "react";

type Props = {
  data: Array<any>;
};

export default function Projects({ data }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin">
        {data.map((project: any, i: any) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-44 h-screen mt-10 md:mt-28"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-[300px] md:w-[400px] rounded-t-md object-contain"
              src={project.imgurl}
              alt=""
            />

            <div className="px-8 w-[300px] md:w-[400px] py-7 font-outfit bg-[#a9a9a9]/5 backdrop-blur-sm md:text-left rounded-b-md space-y-4">
              <h4 className="text-xl font-semibold md:text-2xl">
                {project.title}
              </h4>

              <div className="text-xs font-extralight space-x-4 mt-2 text-gray-200">
                <span className="cursor-pointer hover:underline">
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    Github
                  </a>

                  <span className="inline-flex">
                    <svg
                      className="with-icon_icon__MHUeb"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      style={{
                        color: "currentColor",
                        width: "14px",
                        height: "14px",
                      }}
                    >
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </span>

                <span className="cursor-pointer hover:underline">
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <span className="inline-flex">
                    <svg
                      className="with-icon_icon__MHUeb"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      style={{
                        color: "currentColor",
                        width: "14px",
                        height: "14px",
                      }}
                    >
                      <path d="M7 17L17 7"></path>
                      <path d="M7 7h10v10"></path>
                    </svg>
                  </span>
                </span>
              </div>

              <p className="text-sm font-light md:text-base mt-3 text-gray-100">
                {project.content}
              </p>

              <div className="flex gap-2 mt-2 font-light text-sm items-center text-gray-400">
                <span>tech stack used:</span>
                {project.tech?.map((tech: any, i: any) => (
                  <img
                    key={i}
                    src={tech.tech}
                    alt=""
                    className="w-5 h-5 rounded-sm object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[27%] bg-gradient-to-r from-blue-500 opacity-30 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}
