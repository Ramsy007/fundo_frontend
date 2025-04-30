import React, { useState } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";

export default function Aadhar() {
  const [aadharNumber, setAadharNumber] = useState('');

  const handleAadharChange = (e) => {
    let value = e.target.value;
    // Remove any non-numeric characters and spaces
    value = value.replace(/[^0-9]/g, '');
    
    if (value.length <= 12) {
      setAadharNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aadharNumber.length === 12) {
      console.log("Submitting Aadhar:", aadharNumber);
      // Add your submission logic here
    }
  };

  const formatAadhar = (value) => {
    if (!value) return '';
    // Add spaces after every 4 digits
    return value.replace(/(.{4})/g, '$1 ').trim();
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#243112] mb-2 md:mb-4 rounded-b-3xl">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps2 />
            </div>
          </div>

          {/* Fundo Baba Logo */}
          <div className="flex justify-center mt-2 md:mt-4">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col px-4 sm:px-6 md:px-0">
            {/* Form Card */}
            <div
              className="relative bg-white/62 backdrop-blur-sm rounded-4xl shadow-xl px-10 sm:px-14 md:px-8 py-8 md:py-12 w-full max-w-[500px] flex flex-col items-center"
            >
              {/* BabaStep Image */}
              <div className="absolute -top-20 -left-8 sm:-top-20 sm:-left-6 md:-top-20 md:-left-40 z-40">
                <img 
                  src="/Babaotp.png" 
                  alt="Baba" 
                  className="w-[150px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] object-contain drop-shadow-2xl" 
                />
              </div>

              <div className="text-center mb-4">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#222] mb-2">
                  Baba says, drop your 12-digit <span className="text-[#243112]">Aadhar</span> spell here.
                </h2>
                <p className="text-xs sm:text-sm text-black">
                  It unlocks the gates of instant verification!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="XXXX XXXX XXXX"
                    value={formatAadhar(aadharNumber)}
                    onChange={handleAadharChange}
                    className="w-full px-4 py-2 sm:py-3 text-center rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#243112] bg-transparent text-gray-700 text-lg sm:text-xl font-medium tracking-wider"
                    maxLength={14}
                  />
                </div>

                <button
                  type="submit"
                  disabled={aadharNumber.length !== 12}
                  className="w-full bg-[#243112] text-white font-semibold py-2 sm:py-3 rounded-full text-sm sm:text-base flex items-center justify-center gap-2 shadow hover:bg-[#2f4117] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  SUBMIT
                  <span className="bg-white rounded-full p-1">
                    <svg className="w-4 h-4 text-[#243112]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 00-1 1v10.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L11 14.586V4a1 1 0 00-1-1z" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>

            {/* Steps List - Mobile */}
            <div className="md:hidden w-full mt-2">
              <div className="flex justify-center">
                <StepsList />
              </div>
            </div>

            {/* Steps List - Desktop */}
            <div className="hidden md:block">
              <div className="w-auto">
                <StepsList />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterStep />
    </div>
  );
}