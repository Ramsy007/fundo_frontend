import React, { useState, useRef } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";
import { userAPI } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function OTPAadhar() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(30);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { aadhaarNo, accessKey } =
    location.state || JSON.parse(sessionStorage.getItem("adharData") || "{}");

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    console.log("1. handleSubmit started");
    e.preventDefault();
    const otpValue = otp.join("");
    console.log("2. OTP Value:", otpValue);

    if (otpValue.length !== 6) {
      console.log("3. Invalid OTP length");
      setError("Please enter all 6 digits");
      return;
    }

    setIsLoading(true);
    try {
      const data = {
        accessKey: accessKey,
        otp: otpValue,
        aadhaarNo: aadhaarNo,
      };

      console.log("4. Submitting data:", data);
      const response = await userAPI.submitAadharOTP(data);
      console.log("5. Response received:", response);

      if (response) {
        console.log("6. Response is valid");
        dispatch(changeTracker({ step: 4 }));
        console.log("7. Tracker updated");

        try {
          console.log("8. Attempting navigation");
          await navigate("/apply/e-sign", {
            state: {
              message: "Aadhar verification successful",
              aadhaarNo: aadhaarNo,
            },
          });
          console.log("9. Navigation successful");
        } catch (navError) {
          console.error("Navigation error:", navError);
        }
      } else {
        console.log("10. Invalid response");
        setError("Verification failed. Please try again.");
      }
    } catch (error) {
      console.error("11. API Error:", error);
      setError(error.response?.data?.error || "Invalid OTP. Please try again.");
    } finally {
      console.log("12. Setting loading to false");
      setIsLoading(false);
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

          <div className="flex flex-1 items-center justify-center relative flex-col px-4 sm:px-6 md:px-0">
            <div className="relative bg-white/62 backdrop-blur-sm rounded-4xl shadow-xl px-10 sm:px-14 md:px-8 py-8 md:py-12 w-full max-w-[500px] flex flex-col items-center">
              
              {/* Baba Image */}
              <div className="absolute -top-20 -left-8 sm:-top-20 sm:-left-6 md:-top-20 md:-left-40 z-40">
                <img 
                  src="/Babaotp.png" 
                  alt="Baba" 
                  className="w-[150px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] object-contain drop-shadow-2xl" 
                />
              </div>

              {/* Text Content */}
              <div className="text-center mb-8">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#222] mb-4">
                  Baba just sent you sacred 4-digit code.
                </h2>
                <p className="text-[10px] sm:text-xs md:text-sm text-black">
                  It landed on your phone tied to Aadhar — check quick!
                </p>
              </div>

              {/* OTP Input */}
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputsRef.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className="w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 text-center text-xs sm:text-sm md:text-base font-bold border-2 border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#243112]"
                    />
                  ))}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={otp.some((digit) => digit === "")}
                  className="w-full bg-[#243112] text-white font-semibold py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 shadow hover:bg-[#243112] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "PROCESSING..." : "SUBMIT"}
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
