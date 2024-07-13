import { register } from "swiper/element/bundle";
register();

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";

type Props = {
  data: Array<any>;
};

export default function Projects({ data }: Props) {
  const swiperRef = useRef<any>(null);
  const [indexAt, setIndexAt] = useState(0);

  const slideToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setIndexAt(swiperRef.current.activeIndex);
    }
  };

  const slideToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setIndexAt(swiperRef.current.activeIndex);
    }
  };

  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>

      <div className="absolute flex justify-between w-full z-40 pl-4 pr-2 md:max-w-2xl mt-16 md:mt-10 dark:text-white text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`icon icon-tabler icon-tabler-square-rounded-chevron-left-filled h-8 w-8 md:w-14 md:h-14 cursor-pointer ${
            indexAt == 0 ? "opacity-20 cursor-not-allowed" : "opacity-100"
          } `}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => slideToPrev()}
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path
            d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm1.707 6.293a1 1 0 0 0 -1.414 0l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l3 3l.094 .083a1 1 0 0 0 1.32 -.083l.083 -.094a1 1 0 0 0 -.083 -1.32l-2.292 -2.293l2.292 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z"
            fill="currentColor"
            strokeWidth="0"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`icon icon-tabler icon-tabler-square-rounded-chevron-right-filled h-8 w-8 md:w-14 md:h-14 cursor-pointer ${
            indexAt == 8 ? "opacity-20 cursor-not-allowed" : "opacity-100"
          }`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => slideToNext()}
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path
            d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm-1.707 6.293a1 1 0 0 1 1.32 -.083l.094 .083l3 3a1 1 0 0 1 .083 1.32l-.083 .094l-3 3a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 -.083 -1.32l.083 -.094z"
            fill="currentColor"
            strokeWidth="0"
          ></path>
        </svg>
      </div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper: any) => (swiperRef.current = swiper)}
          onSlideChange={() => setIndexAt(swiperRef.current.activeIndex)}
        >
          {data.map((project: any, i: any) => (
            <SwiperSlide key={i}>
              <div
                key={i}
                className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-44 h-screen mt-10 md:mt-28"
              >
                <Image
                  width={400}
                  height={400}
                  className="w-[300px] md:w-[400px] rounded-t-md object-contain cursor-grab"
                  src={project.imgurl}
                  alt=""
                  priority={false}
                  loading="lazy"
                />

                <div className="px-8 w-[300px] md:w-[400px] py-7 font-outfit shadow-lg bg-slate-100/20 dark:bg-gray-700/30 backdrop-blur-sm md:text-left rounded-b-md space-y-4 cursor-grab">
                  <h4 className="text-xl font-semibold md:text-2xl text-black dark:text-white">
                    {project.title}
                  </h4>

                  <div className="text-xs font-light dark:font-extralight space-x-4 md:mt-0 text-gray-700 dark:text-gray-200">
                    <span className="cursor-pointer underline">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
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

                    <span className="cursor-pointer underline">
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

                  <p className="text-sm font-normal dark:font-light md:text-base mt-3 text-gray-800 dark:text-gray-100 line-clamp-4">
                    {project.content}
                  </p>

                  <div className="flex gap-2 mt-2 font-normal dark:font-light text-sm items-center text-gray-700 dark:text-gray-400">
                    <span>tech stack used:</span>
                    {project.tech?.map((tech: any, i: any) => (
                      <Image
                        key={i}
                        width={20}
                        height={20}
                        src={tech.tech}
                        alt="skills"
                        className="w-5 h-5 rounded-sm object-contain"
                        priority={false}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full absolute top-[27%] bg-gradient-to-r from-blue-500 opacity-70 dark:opacity-30 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
