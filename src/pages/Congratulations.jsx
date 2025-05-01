import React from "react";
import logo from "../assets/logo.png";
import Navbarsteps from "../components/home/Navbarsteps";
import FooterStep from "../components/FooterStep";
import { useNavigate } from "react-router-dom";

export default function Congratulations() {
  const navigate = useNavigate();
  // Example data, replace with real props or state as needed
  const amount = 3175;
  const accountEnding = "9421";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#404064] mb-2 md:mb-4 rounded-b-3xl">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps />
            </div>
          </div>

          {/* Fundo Baba Logo */}
          <div className="flex justify-center mt-2 md:mt-4 mb-4 md:mb-0 ">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col">
            {/* Congratulations Card (custom content) */}
            <div className="relative bg-white rounded-2xl shadow-xl px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 w-full max-w-[280px] sm:max-w-[320px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0 border-4 border-white" style={{ minHeight: "240px" }}>
              {/* BabaStep Image */}
              <div className="absolute -top-13 -left-4 md:-top-12 md:-left-20 z-40">
                <img
                  src="/baba-congratulations.png"
                  alt="Baba"
                  className="w-[75px] h-[75px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#404064] mb-2 text-center">Boom!</h2>
                <p className="text-xs sm:text-sm text-[#404064] text-center mb-4">Money landed safely. Baba's blessings, now in your bank.</p>
                {/* Amount Card */}
                <div className="w-full bg-[#e9eafc] rounded-xl px-4 py-4 mb-5 flex flex-col items-center border border-[#bfc8e6]">
                  <div className="text-xs sm:text-sm text-[#404064] font-semibold text-center mb-1">Amount Disbursed</div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#404064] mb-1">₹{amount.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-[#404064] text-center">to account ending with *****{accountEnding}</div>
                </div>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full bg-[#404064] hover:bg-[#2d2d4d] text-white font-bold py-2 rounded-full text-sm sm:text-base shadow transition mt-2"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>

            {/* Steps List - Mobile (hidden for now, can be added if needed) */}
            {/* <div className="md:hidden w-full mt-2">
              <div className="flex justify-center">
                <StepsList />
              </div>
            </div> */}

            {/* Steps List - Desktop (hidden for now, can be added if needed) */}
            {/* <div className="hidden md:block">
              <div className="w-auto">
                <StepsList />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Footer */}
      <FooterStep />
    </div>
  );
} 