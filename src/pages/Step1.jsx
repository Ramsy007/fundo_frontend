import React, { useState } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import FooterStep from "../components/FooterStep";
import { motion, AnimatePresence } from "framer-motion";

export default function Step1() {
  const [showTerms, setShowTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxClick = (e) => {
    e.preventDefault();
    setShowTerms(true);
  };

  const handleAgree = () => {
    setAgreed(true);
    setShowTerms(false);
  };

  const handleDecline = () => {
    setAgreed(false);
    setShowTerms(false);
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-between bg-white pl-4 pr-4 md:pl-6 md:pr-6 rounded-b-lg relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="bg-[#971201] mb-4 md:mb-6 rounded-b-3xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Blur Background when Terms open */}
        <AnimatePresence>
          {showTerms && (
            <motion.div 
              className="absolute inset-0 bg-black/30 backdrop-blur-md z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <motion.div 
            className="flex justify-center pt-4 md:pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full md:w-[700px]">
              <Navbarsteps />
            </div>
          </motion.div>

          {/* Fundo Baba Logo */}
          <motion.div
            className="flex justify-center mt-4 md:mt-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.3
            }}
          >
            <img src={logo} alt="Fundo Baba Logo" className="w-28 md:w-36" />
          </motion.div>

          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col">
            {/* BabaStep Image */}
            <motion.div
              className="absolute left-0 top-0 z-40"
              style={{ marginLeft: "325px", marginTop: "-20px" }}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 50,
                damping: 20,
                mass: 2,
                delay: 1.2
              }}
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src="/Babastep.png" 
                alt="Baba" 
                className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] object-contain drop-shadow-2xl" 
              />
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="relative bg-[#e9b6b6] rounded-2xl shadow-xl px-6 py-8 md:px-10 md:py-10 w-full max-w-xs md:max-w-lg flex flex-col items-center"
              style={{ minHeight: "320px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5
              }}
              whileHover={{ 
                boxShadow: "0 0 20px rgba(151, 18, 1, 0.3)",
                scale: 1.02
              }}
            >
              <motion.div 
                className="text-center mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-lg md:text-xl font-bold text-[#222] mb-1">
                  Step into Baba's zone. Quick PAN. Faster Loan.
                </h2>
                <p className="text-xs text-gray-600">Please enter your details below</p>
              </motion.div>

              <form className="w-full flex flex-col gap-3 md:gap-4">
                <motion.input
                  type="text"
                  placeholder="Enter PAN (e.g., ABCDE1234F)"
                  className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="text"
                  placeholder="Enter Mobile No. (Aadhaar Registered)"
                  className="w-full px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.div 
                  className="flex items-center text-xs mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <button
                    type="button"
                    className="w-4 h-4 border border-gray-400 rounded mr-2 flex items-center justify-center bg-white focus:outline-none"
                    onClick={handleCheckboxClick}
                    aria-checked={agreed}
                  >
                    {agreed && (
                      <span className="block w-3 h-3 bg-[#971201] rounded" />
                    )}
                  </button>
                  <label
                    htmlFor="terms"
                    className="text-[#b48b8b] cursor-pointer"
                    onClick={handleCheckboxClick}
                  >
                    I agree to the <span className="text-[#971201] font-semibold">terms and conditions</span>
                  </label>
                </motion.div>
                <motion.button
                  type="submit"
                  className="mt-2 w-[140px] md:w-[160px] mx-auto flex items-center justify-center gap-2 bg-[#971201] text-white font-bold py-2 rounded-full text-base md:text-lg shadow hover:bg-[#b13a2f] transition"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(151, 18, 1, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  SUBMIT
                  <span className="bg-white text-[#971201] rounded-full p-1 ml-1">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4l8 6-8 6V4z" />
                    </svg>
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Steps List - Mobile */}
            <div className="md:hidden w-full mt-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex justify-center"
              >
                <StepsList />
              </motion.div>
            </div>

            {/* Steps List - Desktop */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="w-auto"
              >
                <StepsList />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <FooterStep />
      </motion.div>

      {/* Terms Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full mx-4 shadow-2xl text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h2 className="text-lg font-bold mb-4 text-[#222]">Terms and Conditions</h2>
              <p className="text-[12px] text-gray-700 mb-6 md:mb-8 leading-relaxed">
                I have read and agreed to the Terms of Use and hereby appoint Fintech Cloud Loan
                and its Lending NBFC to receive my credit information from credit bureaus, KYC from
                Government Regulated Database. By submitting my details, I override my NDNC registration
                to authorize Fintech Cloud Loan and its Lending NBFC/representatives to contact me
                through Call, SMS, Email, Whatsapp or any other mode. You may collect my address from
                various data sources for user verification and security purposes. I also authorize you
                to send me promotional offers of financial products or services from time to time.
              </p>
              <div className="flex justify-center gap-4 md:gap-6">
                <motion.button
                  className="text-[#222] font-semibold"
                  onClick={handleDecline}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Decline
                </motion.button>
                <motion.button
                  className="bg-[#971201] text-white font-bold px-6 md:px-8 py-2 rounded"
                  onClick={handleAgree}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(151, 18, 1, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agree
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
