"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import Resume from "../resume/page";
import Contact from "../contact/page";
import Work from "../work/page";
import Page from "@/app/page";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Fast, responsive, and scalable websites — from sleek front-ends to powerful back-ends.",
    href: "#contact",
  },

  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Clean, user-centered designs that blend beauty with functionality.",
    href: "#contact",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Distinctive logos that capture and communicate your brand's identity.",
    href: "#contact",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Search-friendly websites built to boost visibility and organic growth.",
    href: "#contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top */}
                <div className="w-full flex justify-between items-center">
                  {" "}
                  {/*number and arrow to be in the same line and arrow in the front*/}
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                {/*title */}
                <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/*description */}
                <p className="text-white/60">{service.description}</p>
                {/*button */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
