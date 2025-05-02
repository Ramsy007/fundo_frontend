import React, { useEffect, useState } from "react";
import Hero from "../components/home/Hero";
import NeedMoneySection from "../components/home/NeedMoneySection";
import EmiCalci from "../components/home/EmiCalci";
import Navbar from "../components/Navbar";
import LoanProcess from "../components/home/LoanProcess";
import TrustBaba from "../components/home/TrustBaba";
import QuickEasy from "../components/home/QuickEasy";
import HomeFooter from "../components/home/HomeFooter";
import MoneyMoments from "../components/home/MoneyMoments";
import LoanTypesScroll from "../components/home/LoanTypesScroll";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        // 👈 adjust this scroll value as needed
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-black pl-10 pr-10 pb-10 max-[1320px]:pl-5 max-[1320px]:pr-5 max-[425px]:pl-2 max-[425px]:pr-2">
      <div className="bg-white pb-15 rounded-b-[50px]">
        <div className="flex justify-between items-center gap-4 mr-10 pt-5 pl-5">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <Navbar />
        </div>
        <div className="mt-10">
          <Hero />
        </div>
        <div className="mt-20">
          <NeedMoneySection />
        </div>
        <div className="mt-30">
          <EmiCalci />
        </div>
        <div>
          <MoneyMoments />
        </div>
        <LoanTypesScroll />
        <div className="mt-30 pl-10 pr-10 max-[425px]:pl-2 max-[425px]:pr-2">
          <TrustBaba />
        </div>
        <div className="mt-30">
          <LoanProcess />
        </div>
        <div className="mt-30">
          <QuickEasy />
          <HomeFooter />
        </div>
        {/* {showButton && (
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <button className="bg-[#fef8f7] text-[#930f00] font-bold tracking-wide py-2 px-8 rounded-full border border-[#930f00] shadow-md hover:shadow-lg transition-all duration-300">
              COMING SOON...
            </button>
          </motion.div>
        )} */}
      </div>
    </div>
  );
}
