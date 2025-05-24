"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination } from "swiper/modules"; // use from 'swiper/modules' for Swiper 10+

import WorkSliderBtns from "@/components/WorkSliderBtns";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  BsArrowBarRight,
  BsArrowUpRight,
  BsGithub,
  BsGitlab,
} from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Admin Dashboard",
    description:
      "A responsive and customizable admin dashboard built using React. It features user management, analytics charts, dark mode toggle, sidebar navigation, and reusable UI components for managing data efficiently.",
    stack: [{ name: "React" },
    { name: "Syncfusion" },
    { name: "React Router" },
    { name: "Chart.js" },],
    image: "/assets/work/thumb1.png",
    live: "https://shoopyy.netlify.app/",
    github: "https://github.com/nahomgebre57/AdminDashbord-React",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "A React-based online store featuring product listings, filters, and responsive UI.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "https://github.com/nahomgebre57/E-commerce-mern",
    github: "https://github.com/nahomgebre57/E-commerce-mern",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "A MERN stack app for managing hospital data including patients, doctors, and appointments.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb3.png",
    live: "https://github.com/nahomgebre57/hopitalManagemnt-system",
    github: "https://github.com/nahomgebre57/hopitalManagemnt-system",
  },
   {
    num: '04',
    category: 'fullstack',
    title: 'Social Media Chat App',
    description:
      'A full-stack, responsive social media application built with the MERN stack. Features include authentication, posts, likes, comments, user profiles, and dark mode.',
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://github.com/nahomgebre57/scocialMediaMern",
    github: "https://github.com/nahomgebre57/scocialMediaMern",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get currrent slide
    const currentIndex = swiper.activeIndex;
    //update the project state with the current slide
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project categoty */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last comma*/}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>
              {/*border */}
              <div className="border border-white/20"></div>
              {/* button*/}
              <div className="flex items-center gap-4">
                {/*live project button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/*github project button*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              //allowTouchMove={true}
              // Enables mouse dragging with a grab cursor
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10"></div>
                    {/* project image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* slider buttons */}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                />
             
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
