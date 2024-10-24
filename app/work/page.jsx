"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Histori Scan",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tenetur magni cumque consequatur eos voluptas corporis, dolorem quia iusto hic cum ducimus minus incidunt laborum accusamus iure velit consequuntur ipsam.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/museum_home.jpg",
    live: "https://papaya-gingersnap-e707a9.netlify.app/",
    github: "https://github.com/MsanjaypKhandan/MuseumTicketing",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Podsnap",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tenetur magni cumque consequatur eos voluptas corporis, dolorem quia iusto hic cum ducimus minus incidunt laborum accusamus iure velit consequuntur ipsam.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
      { name: "Html 5" },
    ],
    image: "/assets/podsnap.png",
    live: "https://podsnap.vercel.app/discover",
    github: "https://github.com/MsanjaypKhandan/podsnap",
  },
  {
    num: "03",
    category: "frontend",
    title: "Year-End Countdown",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, tenetur magni cumque consequatur eos voluptas corporis, dolorem quia iusto hic cum ducimus minus incidunt laborum accusamus iure velit consequuntur ipsam.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "JavaScript" },
      { name: "Html 5" },
    ],
    image: "/assets/newyearcount.png",
    live: "",
    github: "https://github.com/MsanjaypKhandan/JavaScript-Projects/tree/main/newyear",
  },
];

const Work = () => {
  const [project, setPorject] = useState(projects[0]);
  const handleSlidechange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setPorject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] pt-28 flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* projects category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* removing the last comma  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlidechange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div
                        className="absolute top-0 bottom-0 w-full h-full bg-black/10 
                      z-10 "
                      ></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.name}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
