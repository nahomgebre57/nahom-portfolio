"use client";

import { usePathname } from "next/navigation";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  // Add all pages where you want to disable StairTransition
  const disabledPaths = ["/success"];

  const showStair = !disabledPaths.includes(pathname);

  return (
    <>
      {showStair && <StairTransition />}
      <PageTransition>{children}</PageTransition>
    </>
  );
}
