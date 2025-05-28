"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from "react";

const links = [
  { name: "home", path: "#home" },
  { name: "services", path: "#services" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
  const [activeHash, setActiveHash] = useState("#home");
  const [disableBlur, setDisableBlur] = useState(false);

  useEffect(() => {
    const checkScrollAndPath = () => {
      const isHome = window.location.pathname === "/";
      const isTop = window.scrollY === 0;
      setDisableBlur(isHome && isTop);
    };

    checkScrollAndPath();
    window.addEventListener("scroll", checkScrollAndPath);
    window.addEventListener("hashchange", () => setActiveHash(window.location.hash || "#home"));

    return () => {
      window.removeEventListener("scroll", checkScrollAndPath);
      window.removeEventListener("hashchange", () => setActiveHash(window.location.hash || "#home"));
    };
  }, []);

  return (
    <Sheet disableBlur={disableBlur}> {/* Pass prop to Sheet */}
      {/* Menu icon aligned right */}
      <SheetTrigger className="flex justify-end items-center w-full text-3xl text-accent">
        <CiMenuFries />
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center pt-32 gap-10">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Logo */}
        <div className="mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold cursor-pointer">
              Nahom <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setActiveHash(link.path)}
              passHref
            >
              <div
                className={`text-xl capitalize cursor-pointer transition-all hover:text-accent ${
                  activeHash === link.path
                    ? "text-accent border-b-2 border-accent"
                    : ""
                }`}
              >
                {link.name}
              </div>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
