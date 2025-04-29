import React, { useState } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import { motion } from "framer-motion";

export default function WorkStatus() {
  const [workStatus, setWorkStatus] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#a11b0a] ml-6 mr-6 rounded-b-lg">
      {/* Navbar */}
      <div className="flex justify-center pt-6">
        <div className="w-[700px]">
          <Navbarsteps />
        </div>
      </div>

      {/* Fundo Baba Logo above the form card with motion */}
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src={logo} alt="Fundo Baba Logo" className="w-36" />
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center relative">
        {/* Baba Image */}
        <motion.div
          className="hidden md:block absolute left-0 top-0 z-30"
          style={{ marginLeft: "280px", marginTop: "-40px" }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src="/Babastep.png" alt="Baba" className="w-[200px] h-[200px] object-contain drop-shadow-2xl" />
        </motion.div>

        {/* Center: Work Status Card */}
        <motion.div
          className="relative bg-[#e9b6b6] rounded-2xl shadow-xl px-10 py-10 w-full max-w-2xl flex flex-col items-center z-20"
          style={{ minHeight: "400px" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Titles */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#222] mb-1">Where does your income magic come from?</h2>
            <p className="text-xs text-gray-600">Please select your work style so Baba can get your loan blessings ready</p>
          </div>

          {/* Work Status Selection */}
          <form className="w-full flex flex-col gap-4 items-center">
            <div className="flex flex-col w-full">
              <label className="text-[#222] font-semibold mb-2">Select your status</label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800"
                value={workStatus}
                onChange={(e) => setWorkStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="salaried">Salaried</option>
                <option value="self-employed">Self-Employed</option>
              </select>
            </div>

            {/* Conditional Fields if Salaried */}
            {workStatus === "salaried" && (
              <div className="flex flex-col gap-4 w-full mt-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b]"
                />

                <input
                  type="date"
                  placeholder="Salary Date"
                  className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800"
                />

                <input
                  type="number"
                  placeholder="Monthly Salary"
                  className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b]"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-[160px] flex items-center justify-center gap-2 bg-[#971201] text-white font-bold py-2 rounded-full text-lg shadow hover:bg-[#b13a2f] transition"
            >
              SUBMIT <span className="bg-white text-[#971201] rounded-full p-1 ml-1">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4l8 6-8 6V4z" /></svg>
              </span>
            </button>
          </form>
        </motion.div>

        {/* Steps List */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-auto"
        >
          <StepsList />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 flex flex-col md:flex-row items-center justify-between rounded-t-3xl mt-8">
        <div className="text-xs opacity-70">Terms & Condition &nbsp; | &nbsp; Privacy Policy</div>
        <div className="font-bold text-base mt-2 md:mt-0">Contacts</div>
      </footer>
    </div>
  );
}
