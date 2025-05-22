"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import Services from "@/app/services/page";
import Resume from "@/app/resume/page";
import Work from "@/app/work/page";
import Contact from "@/app/contact/page";
import { useRouter } from "next/navigation";



function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-center xl:text-left">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Nahom Gebre</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficent in various programming languages and technologies.
            </p>
            {/* button and social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/NahomCV.pdf" download>
                <Button
                  variant="outline"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}


function FormWrapper() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const onFormSubmitted = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify({ name, email }),
      });
     if (res.ok) {
        router.push("/success"); // 👈 Redirect on success
      } else {
        console.error("Failed to send:", await res.json());
      }
    } catch (error) {
      console.error("Form submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <form onSubmit={onFormSubmitted} className="flex flex-col gap-4 max-w-md">
      <input
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        className="border border-gray-300 rounded px-3 py-2"
        required
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        className="border border-gray-300 rounded px-3 py-2"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-accent text-white py-2 px-4 rounded hover:bg-opacity-90"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}


export default function Page() {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: false, amount: 0.2 },
  };

  return (
    <main className="scroll-container">
      <section id="home" className="section mb-40"><Home /></section>
      <motion.section {...fadeUp} id="services" className="section mb-32 scroll-mt-20">
        <Services />
      </motion.section>
      <motion.section {...fadeUp} id="resume" className="section mb-32 scroll-mt-20">
        <Resume />
      </motion.section>
      <motion.section {...fadeUp} id="work" className="section mb-30 scroll-mt-20">
        <Work />
      </motion.section>
      <motion.section {...fadeUp} id="contact" className="section scroll-m-20">
        <Contact />
      </motion.section>
    </main>
  );
}
