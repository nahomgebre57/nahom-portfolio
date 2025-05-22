import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white w-full px-4 xl:px-12">
      <div className="w-full flex justify-between items-center">
        {/*logo*/}

        <Link href="/">
        <div className="flex items-center gap-0">
         <img src="/assets/logo.png" alt="Nahom" width={50} height={50} className="rounded-full" />
          <h1 className="text-3xl font-semibold">
            Nahom <span className="text-accent">.</span>
          </h1>
          </div>
        </Link>

        {/*desktop nav & hire me button*/}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="#contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*mobile nav*/}

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
