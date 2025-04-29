import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Fundo Baba logo
import Navbarsteps from "../components/home/Navbarsteps";
import StepsList from "../components/StepsList";

export default function OTPEmail() {
  return (
    <div className="min-h-screen bg-[#04344a] flex flex-col justify-between">
      {/* Navbar */}
      <div className="flex justify-center pt-6">
        <Navbarsteps /> 
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center relative">
        {/* Baba Image on the left */}
        <motion.div
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
          style={{ marginLeft: "80px" }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="/Babastep.png"
            alt="Baba"
            className="w-[200px] h-[200px] object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Center Card */}
        <motion.div
          className="bg-[#d5d6d8] rounded-2xl shadow-2xl px-10 py-10 w-full max-w-md flex flex-col items-center z-30"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={logo} alt="Fundo Baba Logo" className="w-32 mb-4" />

          <div className="text-center mb-6">
            <h2 className="text-base font-bold text-[#04344a] mb-2">
              Your OTP is waiting in your inbox like a gift from the heavens.
            </h2>
          </div>

          {/* Form */}
          <form className="w-full flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#04344a] bg-[#d5d6d8] text-gray-800 text-center placeholder:text-gray-500"
            />

            <button
              type="submit"
              className="mt-2 w-[160px] flex items-center justify-center gap-2 bg-[#04344a] text-white font-bold py-2 rounded-full text-lg shadow hover:bg-[#065069] transition"
            >
              SUBMIT
              <span className="bg-white text-[#04344a] rounded-full p-1 ml-1">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 4l8 6-8 6V4z" />
                </svg>
              </span>
            </button>

            <p className="text-xs text-gray-600 mt-2">
              Didn't get it? <br />
              <span className="text-[#04344a] font-semibold">Baba’s got backup. Click resend!</span>
            </p>
          </form>
        </motion.div>

        {/* Steps List on the right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 z-20"
        >
          <StepsList />
        </motion.div>
      </div>

      {/* Footer (Optional) */}
    </div>
  );
}
