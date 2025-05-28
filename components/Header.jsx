"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // 👈 fade-in control

  useEffect(() => {
    // Show header after slight delay to sync with page entry transition
    const timeout = setTimeout(() => setIsVisible(true), 400);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full px-4 xl:px-12 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm text-white transition-all duration-300 ${
        isScrolled ? "py-3 xl:py-4" : "py-8 xl:py-12"
      } ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`} // 👈 fade logic
    >
      <div className="flex justify-between items-center max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Navigate to homepage"
          className="flex items-center gap-2"
        >
          <Image
            src="/assets/logo.png"
            alt="Nahom Logo"
            width={isScrolled ? 36 : 50}
            height={isScrolled ? 36 : 50}
            className="rounded-full transition-all duration-300"
            priority
          />
          <h1
            className={`font-semibold select-none transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-3xl"
            }`}
          >
            Nahom <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation & Hire Me Button */}
        <nav className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="#contact" passHref>
            <Button as="a" aria-label="Hire me button">
              Hire me
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
