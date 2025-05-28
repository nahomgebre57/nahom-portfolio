"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "home", path: "#home" },
  { name: "services", path: "#services" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  const [activeHash, setActiveHash] = useState("#home");

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          onClick={() => setActiveHash(link.path)}
          className={`capitalize font-medium transition-all hover:text-accent ${
            activeHash === link.path ? "text-accent border-b-2 border-accent" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
