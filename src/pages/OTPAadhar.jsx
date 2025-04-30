import React, { useState, useRef } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";

export default function OTPAadhar() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 4) {
      console.log("Submitting OTP:", otpCode);
      // Add your submission logic here
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#243112] mb-2 md:mb-4 rounded-b-3xl">
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps2 />
            </div>
          </div>

          <div className="flex justify-center mt-2 md:mt-4">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          <div className="flex flex-1 items-center justify-center relative flex-col">
            <div className="relative bg-[rgba(211,211,211,0.3)] backdrop-blur-sm rounded-4xl shadow-xl px-6 py-6 md:px-8 md:py-8 w-full max-w-[500px] flex flex-col items-center">
              
              {/* Baba Image */}
              <div className="absolute -top-10 -left-3 md:-top-10 md:-left-20 z-40">
                <img 
                  src="/Babastep.png" 
                  alt="Baba" 
                  className="w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] object-contain drop-shadow-2xl" 
                />
              </div>

              {/* Text Content */}
              <div className="text-center mb-4">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#222] mb-2 whitespace-nowrap">
                  Baba just sent you sacred 4-digit code.
                </h2>
                <p className="text-xs sm:text-sm text-black">
                  It landed on your phone tied to Aadhar — check quick!
                </p>
              </div>

              {/* OTP Input */}
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex justify-between gap-2 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputsRef.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-center text-lg sm:text-xl font-bold border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#243112]"
                    />
                  ))}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={otp.some((digit) => digit === "")}
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

            {/* Steps List */}
            <div className="md:hidden w-full mt-2 flex justify-center">
              <StepsList />
            </div>
            <div className="hidden md:block mt-4">
              <StepsList />
            </div>
          </div>
        </div>
      </div>
      <FooterStep />
    </div>
  );
}
