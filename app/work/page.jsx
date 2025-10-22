"use client";

import { motion } from "framer-motion";
import React, { useState, useCallback, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  BsArrowUpRight,
  BsGithub,
  BsPlayFill,
} from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Admin Dashboard",
    description:
      "A responsive and customizable admin dashboard built using React. It features user management, analytics charts, dark mode toggle, sidebar navigation, and reusable UI components for managing data efficiently.",
    stack: [
      { name: "React" },
      { name: "Syncfusion" },
      { name: "React Router" },
      { name: "Chart.js" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://shoopyy.netlify.app/",
    github: "https://github.com/nahomgebre57/AdminDashbord-React",
    featured: true,
  },

   {
    num: "02",
    category: "Mobile App",
    title: "Admin Dashboard",
    description:
      "A responsive and customizable admin dashboard built using React. It features user management, analytics charts, dark mode toggle, sidebar navigation, and reusable UI components for managing data efficiently.",
   stack: [
  { name: "React Native" },
  { name: "Expo" },
  { name: "Clerk" },
  { name: "Express.js" },
  { name: "PostgreSQL" },
]
,
    image: "/assets/work/foodd.jpg",
    live: "#",
    github: "https://github.com/nahomgebre57/react-native-recipe-app",
    featured: true,
  },
  {
    num: "03",
    category: "Mobile App",
    title: "BloodBank App",
    description:
      "A full-stack Blood Bank App with donor registration, blood inventory tracking, hospital requests, admin management, and real-time stock updates. Includes secure authentication and role-based access control.",
    stack: [
      { name: "Java" },
      { name: "JDBC" },
      { name: "MySQL" },
      { name: "Swing" },
    ],
    image: "/assets/work/pic6.jpg",
    live: "#",
    github: "https://github.com/nahomgebre57/BloodBankapp",
    featured: true,
  },
  {
    num: "04",
    category: "fullstack",
    title: "Social Media Chat App",
    description:
      "A full-stack, responsive social media application built with the MERN stack. Features include authentication, posts, likes, comments, user profiles, real-time messaging, and dark mode.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Socket.io" },
    ],
    image: "/assets/work/thumb22.png",
    live: "https://nahgram.onrender.com/",
    github: "https://github.com/nahomgebre57/scocialMediaMern",
    featured: true,
  },
  {
    num: "05",
    category: "frontend",
    title: "Digital Watch Shop",
    description:
      "Responsive e-commerce website for luxury watches with product listings, advanced filtering, shopping cart functionality, and smooth animations. Built with modern frontend technologies.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "GSAP" },
    ],
    image: "/assets/work/pic3.png",
    live: "https://digitalwatchshop.netlify.app/",
    github: "https://github.com/nahomgebre57/DigitalWatch",
    featured: false,
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const swiperRef = useRef(null);
  
  const project = projects[activeIndex];

  const handleSlideChange = useCallback((swiper) => {
    const currentIndex = swiper.realIndex; // Use realIndex for loop mode
    setActiveIndex(currentIndex);
  }, []);

  const handleImageLoad = (index) => {
    setImageLoadStates(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Info Section */}
          <div className="w-full xl:w-[50%] xl:h-[520px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[25px] h-full justify-center">
              {/* Project Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              
              {/* Project Category & Title */}
              <div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <h3 className="text-2xl font-semibold text-accent mt-2">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-white/60 leading-relaxed text-lg">{project.description}</p>
              
              {/* Project Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20 hover:bg-accent/20 transition-colors duration-300"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
              
              {/* Separator */}
              <div className="border border-white/20 my-2"></div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-accent hover:bg-accent-hover text-primary flex justify-center items-center group transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <BsPlayFill className="text-xl group-hover:text-white transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub Button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 hover:bg-white/20 flex justify-center items-center group transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <BsGithub className="text-white text-xl group-hover:text-accent transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Code on GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* External Link Button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/10 hover:bg-white/20 flex justify-center items-center group transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <BsArrowUpRight className="text-white text-xl group-hover:text-accent transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Open in New Tab</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Image Slider */}
          <div className="w-full xl:w-[50%] relative mb-8 xl:mb-0">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={800}
              loop={true}
              className="xl:h-[520px] rounded-[20px] shadow-2xl"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {projects.map((projectItem, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] xl:h-[520px] relative group flex justify-center items-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-[20px] overflow-hidden">
                    {/* Loading Skeleton */}
                    {!imageLoadStates[index] && (
                      <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-[20px] flex items-center justify-center">
                        <div className="text-white/50">Loading {projectItem.title}...</div>
                      </div>
                    )}
                    
                    {/* Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-[20px] z-10"></div>
                    
                    {/* Project Image */}
                    <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                      <Image
                        src={projectItem.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        alt={`${projectItem.title} - ${projectItem.category} project`}
                        onLoad={() => handleImageLoad(index)}
                        priority={index === 0}
                      />
                    </div>
                    
                    {/* Featured Badge */}
                    {projectItem.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-accent text-primary text-sm font-bold rounded-full shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Project Title Only - Description Removed */}
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-white text-xl font-bold drop-shadow-lg text-center">
                        {projectItem.title}
                      </h3>
                    </div>

                  </div>
                </SwiperSlide>
              ))}

              {/* Slider Navigation Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-4 z-20 w-full justify-between xl:w-max xl:justify-none px-4"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full shadow-lg transform hover:scale-105 backdrop-blur-sm"
              />
            </Swiper>
            
            {/* Slide Indicator Dots */}
            <div className="flex justify-center mt-4 xl:mt-6">
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === index 
                        ? 'bg-accent w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(index);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;