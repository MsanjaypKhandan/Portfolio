"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
 
  SiExpress,
  SiShadcnui,
} from "react-icons/si";
import { IoSchoolSharp } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";


const about = {
  title: "About me",
  description:
    "BE student passionate about full stack web development, data structures, algorithms, C++, C, Java, and Python programming languages. Eager to apply theoretical knowledge to practical projects and committed to continual learning and growth in the field of Software Development",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sanjayp Khandan M",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9840626847",
    },
    {
      fieldName: "Email",
      fieldValue: "msanjayp21@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "Tamil, English",
    },
  ],
};

const education = {
  icon: <IoSchoolSharp />,
  title: "My education",
  description:
    "Through these certifications, I have gained practical skills and knowledge that drive my passion for continuous learning and innovation in technology.",
  items: [
    {
      platform: "Meta",
      course: "Meta Front-End Developer",
      duration: "March 2023 - November 2023",
    },
    {
      platform: "Coursera",
      course: "IBM Full Stack Software Developer",
      duration: "November 2023 - Feb 2024",
    },
    {
      platform: "Coursera",
      course: "React",
      duration: "March 2023 - April 2023",
    },
    {
      platform: "Dartmouth College",
      course: "C Programming",
      duration: "July 2024 - Sep 2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I have a diverse set of skills in full stack web development and programming. My expertise spans HTML5, CSS, JavaScript, and various frameworks and libraries including Node.js, Express.js, and React.js. Additionally, I am proficient in C++, Java, and have experience with databases like MongoDB and styling tools such as Tailwind CSS. I am also familiar with Next.js, ShadCN UI library.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDb",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCN",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
   
  ],
};
  const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My experience",
    description:
      "I have experience in developing dynamic and responsive websites using a range of modern web technologies. My focus is on delivering efficient, user-centric solutions that combine clean design with robust functionality.",
    items: [
      {
        company: "Shiash Infotech Solutions",
        position: "Web Developer",
        duration: "Jan 2024 - feb 2024",
      },
    ],
  };
  

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] pt-24 flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto pt-28">
      <h1 className="text-4xl font-bold justify-center -mb-10 ml-20 mt ">Why Hire me?</h1>
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 mt-20">
          <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <div
                            className="flex sm:flex-row justify-between items-center flex-col
                          "
                          >
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.course}
                            </h3>
                          
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.platform}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="experience"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
