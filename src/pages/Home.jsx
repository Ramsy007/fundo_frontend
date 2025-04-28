import React from "react";
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

export default function Home() {
  return (
    <div className="bg-black pl-10 pr-10 pb-10 max-[425px]:pl-4 max-[425px]:pr-4">
      <div className="bg-white pb-15 rounded-b-[50px]">
        <div className="flex justify-end mr-10 pt-5">
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
        <div className="mt-30 pl-10 pr-10">
          <TrustBaba />
        </div>
        <div className="mt-30">
          <LoanProcess />
        </div>
        <div className="mt-30">
          <QuickEasy />
          <HomeFooter />
        </div>
      </div>
    </div>
  );
}
