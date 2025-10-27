"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiMysql, SiTypescript,
  SiRedux,
  SiSass,
  SiDocker,
  SiFirebase,
  SiJest,

  SiLinux,
  SiWebpack
} from "react-icons/si";

// about page
const about = {
  title: "About Me",
  description:
    "Passionate full-stack developer with 2+ years of experience building modern, responsive web applications. Strong foundation in computer science principles and a continuous learner always exploring new technologies. I enjoy solving complex problems and creating efficient, user-friendly solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nahom Gebre",
    },
    {
      fieldName: "Phone",
      fieldValue: "+251 957 088 840",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "linkedin.com/in/nahomgebre",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "nahomgebre73@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Ethiopia",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Amharic",
    },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Progressive journey through various roles in web development, from internships to professional positions, building expertise in modern technologies.",
  items: [
    {
      company: "Kuraz Technologies",
      position: "Frontend Developer Intern",
      duration: "2025 - Present",
      description: "Developing responsive user interfaces using React and TypeScript"
    },
    {
      company: "Oasis Infobyte",
      position: "Web Development Intern",
      duration: "2025 - Present",
      description: "Building full-stack applications and improving UI/UX design skills"
    },
    {
      company: "Dorcas Tech",
      position: "Junior Full Stack Developer",
      duration: "2024 - 2025",
      description: "Developed and maintained web applications using MERN stack"
    },
    {
      company: "Maleda Tech Solutions",
      position: "Full Stack Developer Intern",
      duration: "2023 - 2024",
      description: "Built RESTful APIs and responsive frontend components"
    },
    {
      company: "Freelance Projects",
      position: "Web Developer",
      duration: "2022 - 2023",
      description: "Created custom websites and web applications for various clients"
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Formal education combined with continuous learning through online courses and practical projects.",
  items: [
    {
      institution: "University of Gondar",
      degree: "BSc in Computer Science",
      duration: "2022 - Present",
      description: "Focus on software engineering, algorithms, and data structures"
    },
    {
      institution: "Meta Front-End Developer",
      degree: "Professional Certificate",
      duration: "2023",
      description: "Advanced React, UI/UX principles, and frontend development"
    },
    {
      institution: "FreeCodeCamp",
      degree: "Full Stack Development",
      duration: "2022 - 2023",
      description: "JavaScript, Node.js, MongoDB, and responsive web design"
    },
    {
      institution: "Geez Design School",
      degree: "Graphic Design Diploma",
      duration: "2021",
      description: "UI/UX design principles and visual communication"
    },
  ],
};

// skills
const skills = {
  title: "My Skills",
  description:
    "Comprehensive skill set covering frontend, backend, and development tools. Continuously learning and adapting to new technologies.",
  skillList: [
    // Frontend
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      category: "frontend"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
      category: "frontend"
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      category: "frontend"
    },
    {
      icon: <FaReact />,
      name: "React.js",
      category: "frontend"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      category: "frontend"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      category: "frontend"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      category: "frontend"
    },
    {
      icon: <SiRedux />,
      name: "Redux",
      category: "frontend"
    },
    {
      icon: <SiSass />,
      name: "Sass",
      category: "frontend"
    },

    // Backend
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      category: "backend"
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      category: "backend"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      category: "backend"
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      category: "backend"
    },
    {
      icon: <FaPython />,
      name: "Python",
      category: "backend"
    },
    {
      icon: <FaJava />,
      name: "Java",
      category: "backend"
    },
    {
      icon: <SiDocker />,
      name: "Docker",
      category: "backend"
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
      category: "backend"
    },
    {
      icon: <SiJest />,
      name: "Jest",
      category: "backend"
    },


    // Tools
    {
      icon: <FaFigma />,
      name: "Figma",
      category: "tools"
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      category: "tools"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      category: "tools"
    },
    {
      icon: <SiLinux />,
      name: "Linux",
      category: "tools"
    },
    {
      icon: <SiWebpack />,
      name: "Webpack",
      category: "tools"
    },
  ],
};

const certifications = {
  title: "My Certifications",
  description:
    "Industry-recognized certifications validating my skills in web development and software engineering.",
  items: [
    {
      src: "/assets/certifications/kuraz.jpg",
      title: "Internship Completion Certificate",
      issuer: "Kuraz Technologies",
      duration: "2025"
    },
    {
      src: "/assets/certifications/react.jpg",
      title: "Mastering React and Node.js",
      issuer: "Udemy",
      duration: "2025"
    },
    {
      src: "/assets/certifications/hacking.jpg",
      title: "Ethical Hacking and Cyber Security",
      issuer: "Udemy",
      duration: "2025"
    },
    {
      src: "/assets/certifications/django.jpg",
      title: "Django Web Development",
      issuer: "Udemy",
      duration: "2025"
    },
    {
      src: "/assets/certifications/deploma.jpg",
      title: "React Developer",
      issuer: "Udemy",
      duration: "2025"
    },
    {
      src: "/assets/certifications/html.jpg",
      title: "Html, CSS, and JavaScript",
      issuer: "Udemy",
      duration: "2025"
    },

  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';

const Resume = () => {
  // Group skills by category
  const frontendSkills = skills.skillList.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.skillList.filter(skill => skill.category === 'backend');
  const toolSkills = skills.skillList.filter(skill => skill.category === 'tools');

  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle image click
  const handleImageClick = (cert) => {
    setSelectedImage(cert);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
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
                          <div className="flex items-center gap-2">
                            {/* dot */}
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

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                {/* Frontend Skills */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold mb-6 text-accent border-b border-accent/30 pb-2">
                    Frontend Development
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {frontendSkills.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-3 group hover:bg-[#2a2a32] transition-all duration-300">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-sm text-white/80 group-hover:text-white">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Backend Skills */}
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold mb-6 text-accent border-b border-accent/30 pb-2">
                    Backend Development
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {backendSkills.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-3 group hover:bg-[#2a2a32] transition-all duration-300">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-sm text-white/80 group-hover:text-white">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-2xl font-semibold mb-6 text-accent border-b border-accent/30 pb-2">
                    Tools & Technologies
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {toolSkills.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-3 group hover:bg-[#2a2a32] transition-all duration-300">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-sm text-white/80 group-hover:text-white">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* certifications - Now with images */}
            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certifications.description}
                </p>
                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifications.items.map((cert, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] rounded-xl overflow-hidden border border-gray-700 hover:border-accent/50 transition-all duration-300 group cursor-pointer"
                          onClick={() => handleImageClick(cert)}
                        >
                          <div className="h-48 overflow-hidden">
                            <img
                              src={cert.src}
                              alt={cert.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <span className="text-accent text-sm">{cert.duration}</span>
                            <h3 className="text-lg font-semibold mt-1 mb-2 line-clamp-1">
                              {cert.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60 text-sm">{cert.issuer}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[620px] m x-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col xl:flex-row xl:items-start gap-2 xl:gap-8 p-4 bg-[#232329] rounded-xl hover:bg-[#2a2a32] transition-colors duration-300 flex-wrap"
                      >
                        <span className="text-white/60 font-medium min-w-[120px] break-words">
                          {item.fieldName}
                        </span>
                        <span className="text-white font-semibold break-words">
                          {item.fieldValue}
                        </span>
                      </li>


                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Modal for Full Image View */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/10 hover:bg-red-500 text-black p-2 rounded-full transition-all duration-300 z-20 shadow-lg backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>



            {/* Image Container */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white/80">
                {selectedImage.issuer} • {selectedImage.duration}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Resume;