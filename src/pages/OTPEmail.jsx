import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { userAPI } from "../services/api";
// import { useDispatch } from "react-redux";
// import { changeTracker } from "../redux/slices/lTracherSlice";
import logo from "../assets/logo.png";
import Navbarsteps from "../components/home/Navbarsteps";
import StepsList from "../components/StepsList";

export default function OTPEmail() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(30);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { request_id, office_email, personal_email } =
    location.state || JSON.parse(sessionStorage.getItem("emailData") || "{}");
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(changeTracker({ step: 1 }));
  // }, [dispatch]);

  // Handle resend cooldown timer
  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Redirect if required data is missing
  useEffect(() => {
    if (!request_id || !office_email || !personal_email) {
      navigate("/apply/email");
    }
  }, [request_id, office_email, personal_email, navigate]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if current input is filled
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    // Clear error when user types
    setError("");
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleEditEmail = async () => {
    navigate("/apply/email", { replace: true });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setIsLoading(true);
    try {
      const data = {
        otp: otpValue,
        request_id,
        office_email,
        personal_email,
      };

      console.log("Verifying Email OTP with data:", data);
      const response = await userAPI.verifyEmailOTP(data);
      console.log("Email OTP Verification Response:", response);

      if (response) {
        console.log("OTP verified successfully");
        // dispatch(changeTracker({ step: 2 }));
        navigate("/apply/upload-bank-statement");
      } else {
        throw new Error("Invalid OTP response");
      }
    } catch (error) {
      console.error("Email OTP Error:", error);
      setError(error.response?.data?.message || "Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (resendCooldown > 0) return;

    console.log("Resend OTP started");
    setIsLoading(true);
    try {
      const data = {
        office_email,
        personal_email,
      };

      console.log("Resend data:", data);
      const response = await userAPI.sendEmailOTP(data);
      console.log("Resend response:", response);

      if (response && response.request_id) {
        // Update sessionStorage with new request_id
        const newData = {
          request_id: response.request_id,
          office_email,
          personal_email,
        };
        sessionStorage.setItem("emailData", JSON.stringify(newData));
        setError("");
        setResendCooldown(30); // Reset cooldown timer

        // Navigate with new request_id
        navigate("/apply/otp-email", {
          state: newData,
          replace: true,
        });
      } else {
        throw new Error("Failed to get new request ID");
      }
    } catch (error) {
      console.error("Resend error:", error);
      setError(
        error.response?.data?.message ||
        "Failed to resend OTP. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

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
              <div className="absolute -top-13 -left-4 md:-top-17 md:-left-25 z-40">
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
                <p className="text-xs sm:text-sm text-gray-600">
                  Enter OTP sent to <span className="text-[#04344a] font-semibold">{office_email}</span>
                </p>
              </div>

              <form className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4" onSubmit={handleSubmit}>
                <div className="flex gap-1.5 justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-8 h-10 sm:w-10 sm:h-12 text-center text-lg font-semibold border-2 border-[#04344a] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04344a] focus:border-transparent  text-[#04344a]"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      disabled={isLoading}
                    />
                  ))}
                </div>

                {error && (
                  <p className="text-red-500 text-[8px] sm:text-xs text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading || !otp.join("")}
                  className="mt-1 w-[120px] sm:w-[140px] md:w-[160px] mx-auto flex items-center justify-center gap-2 bg-[#04344a] text-white font-bold py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-lg shadow hover:bg-[#065069] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="animate-spin">⌛</span>
                  ) : (
                    <>
                      VERIFY
                      <span className="bg-white text-[#04344a] rounded-full p-0.5 sm:p-1 ml-1">
                        <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 4l8 6-8 6V4z" />
                        </svg>
                      </span>
                    </>
                  )}
                </button>

                <div className="text-center mt-1 sm:mt-2">
                  <p className="text-[8px] sm:text-[10px] text-[#04344a]">
                    Didn't get it? <br />
                    <button 
                      type="button"
                      onClick={handleResendOTP}
                      disabled={isLoading || resendCooldown > 0}
                      className={`text-[#04344a] font-semibold ${resendCooldown > 0 ? 'opacity-50 cursor-not-allowed' : 'hover:underline'}`}
                    >
                      {resendCooldown > 0
                        ? `Resend in ${resendCooldown}s`
                        : "Baba's got backup. Click resend!"}
                    </button>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleEditEmail}
                  disabled={isLoading}
                  className="text-[8px] sm:text-[10px] text-[#04344a] font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Edit Email
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
      <footer className="bg-black text-white py-4 md:py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between rounded-t-3xl">
        <div className="text-xs opacity-70">
          Terms & Condition &nbsp; | &nbsp; Privacy Policy
        </div>
        <div className="font-bold text-sm md:text-base mt-2 md:mt-0">Contacts</div>
      </footer>
    </div>
  );
}
