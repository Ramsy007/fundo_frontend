import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Fundo Baba logo
import Navbarsteps from "../components/home/Navbarsteps";
import StepsList from "../components/StepsList";

export default function OTPEmail() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [canResend, setCanResend] = useState(false);

  // Validate OTP
  const validateOTP = (value) => {
    if (!value) return "OTP is required";
    if (value.length !== 6) return "OTP must be 6 digits";
    if (!/^\d+$/.test(value)) return "OTP must contain only numbers";
    return "";
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setOtp(value);
    
    // Clear error when user starts typing
    setError("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const otpError = validateOTP(otp);
    setError(otpError);

    if (!otpError) {
      // Form is valid, proceed with submission
      console.log("OTP submitted:", otp);
      // Add your submission logic here
    }
  };

  // Handle resend OTP
  const handleResendOTP = () => {
    if (canResend) {
      // Add your resend OTP logic here
      console.log("Resending OTP...");
      
      // Start countdown timer
      setCanResend(false);
      setResendTimer(30);
    }
  };

  // Countdown timer effect
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResend(true);
    }
    
    return () => clearInterval(timer);
  }, [resendTimer]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#04344a] mb-2 md:mb-4 rounded-b-3xl">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps />
            </div>
          </div>

          {/* Fundo Baba Logo */}
          <div className="flex justify-center mt-2 md:mt-4">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col">
            {/* Form Card */}
            <div
              className="relative bg-[#d5d6d8] rounded-2xl shadow-xl px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 w-full max-w-[280px] sm:max-w-[320px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
              style={{ minHeight: "240px" }}
            >
              {/* BabaStep Image */}
              <div
                className="absolute -top-13 -left-4 md:-top-12 md:-left-20 z-40"
              >
                <img 
                  src="/Babastep.png" 
                  alt="Baba" 
                  className="w-[75px] h-[75px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] object-contain drop-shadow-2xl" 
                />
              </div>

              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#04344a] mb-1">
                  Your OTP is waiting in your inbox like a gift from the heavens.
                </h2>
              </div>

              <form className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={otp}
                    onChange={handleInputChange}
                    placeholder="Enter OTP"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#04344a] bg-[#d5d6d8] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium text-center"
                  />
                  {error && (
                    <p className="text-red-500 text-[8px] sm:text-xs mt-1">{error}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="mt-1 w-[120px] sm:w-[140px] md:w-[160px] mx-auto flex items-center justify-center gap-2 bg-[#04344a] text-white font-bold py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-lg shadow hover:bg-[#065069] transition"
                >
                  SUBMIT
                  <span className="bg-white text-[#04344a] rounded-full p-0.5 sm:p-1 ml-1">
                    <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4l8 6-8 6V4z" />
                    </svg>
                  </span>
                </button>

                <div className="text-center mt-1 sm:mt-2">
                  <p className="text-[8px] sm:text-[10px] text-gray-600">
                    Didn't get it? <br />
                    <button 
                      type="button"
                      onClick={handleResendOTP}
                      disabled={!canResend}
                      className={`text-[#04344a] font-semibold ${!canResend ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
                    >
                      {canResend ? "Baba's got backup. Click resend!" : `Resend in ${resendTimer}s`}
                    </button>
                  </p>
                </div>
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
      <footer className="bg-black text-white py-4 md:py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between rounded-t-3xl">
        <div className="text-xs opacity-70">
          Terms & Condition &nbsp; | &nbsp; Privacy Policy
        </div>
        <div className="font-bold text-sm md:text-base mt-2 md:mt-0">Contacts</div>
      </footer>
    </div>
  );
}
