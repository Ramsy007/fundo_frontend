import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import NeedMoneySection from "../components/home/NeedMoneySection";
import EmiCalci from "../components/home/EmiCalci";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black pl-10 pr-10">
      <div className="bg-white">
        <div className="mt-5 flex justify-end mr-10">
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
      </div>
    </div>
  );
}
