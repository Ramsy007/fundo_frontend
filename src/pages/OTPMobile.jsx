import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authAPI, userAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useDispatch } from "react-redux";
// import { changeTracker } from "../redux/slices/lTracherSlice";
import { leadStageToRouteMap } from "../utils/constants";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import { motion } from "framer-motion";

export default function OTPMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  // const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(30);
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const inputRef = useRef(null);

  // Get the data passed from previous pages or sessionStorage
  const { PAN, request_id, phone_number } =
    location.state ||
    JSON.parse(sessionStorage.getItem("panMobileData") || "{}");
  console.log("--------------------------------")
  console.log("PAN:", PAN);
  console.log("request_id:", request_id);
  console.log("phone_number:", phone_number); 

  // Redirect if required data is missing
  useEffect(() => {
    if (!PAN || !request_id || !phone_number) {
      navigate("/apply/pan-mobile", { replace: true });
    }
  }, [PAN, request_id, phone_number, navigate]);

  // useEffect(() => {
  //   dispatch(changeTracker({ step: 1 }));
  // }, [dispatch]);

  // Get user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude.toString(),
          lng: pos.coords.longitude.toString(),
        });
      },
      (err) => {
        console.error("Location error:", err.message);
        setError("Please enable location services to continue");
      }
    );
  }, []);

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

  const handleChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit length to 6 digits
    if (/^\d*$/.test(value) && value.length <= 6) {
      setOtp(value);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!otp) {
      setError("Please enter the OTP");
      return;
    }

    if (otp.length < 4) {
      setError("OTP must be at least 4 digits");
      return;
    }

    if (!userLocation.lat || !userLocation.lng) {
      setError("Please enable location services to continue");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await handleMobileSubmit(otp);
    } catch (error) {
      console.error("Error:", error);
      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleMobileSubmit = async (otpValue) => {
    try {
      const data = {
        PAN: PAN,
        otp: otpValue,
        request_id: request_id,
        phone_number: phone_number,
        lat: userLocation.lat,
        lng: userLocation.lng,
      };

      console.log("Verifying OTP with data:", data);
      const response = await authAPI.verifyOTP(data);
      console.log("Mobile OTP Response:", response);

      if (response.token) {
        login(response.token);
        const journey = await userAPI.getJourney();
        sessionStorage.removeItem("panMobileData");
        const stage = journey.journey.lead_stage;
        if (stage === "SEND_EMAIL_OTP") {
          navigate("/apply/email");
        } else if (stage === "SEND_AADHAAR_OTP") {
          navigate("/apply/adhar-card");
        } else {
          navigate(leadStageToRouteMap[stage]);
        }
      } else {
        console.error("No token found in response:", response);
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Mobile OTP Error:", error);
      setError("Invalid OTP. Please try again.");
      throw error;
    }
  };

  const handleResendOTP = async () => {
    if (resendCooldown > 0) return;

    try {
      setIsLoading(true);
      setOtp(""); // Clear the OTP input
      const data = {
        PAN,
        phone_number,
        request_id,
        lat: userLocation.lat,
        lng: userLocation.lng,
      };

      console.log("Resending OTP with data:", data);
      const response = await authAPI.sendOTP(data);
      console.log("Resend OTP Response:", response);

      if (response) {
        const stateData = {
          PAN: data.PAN,
          phone_number: data.phone_number,
          request_id: response.request_id,
        };
        sessionStorage.setItem("panMobileData", JSON.stringify(stateData));

        navigate("/apply/otp-mobile", {
          state: stateData,
        });
      }
      setError("");
      setResendCooldown(30);
    } catch (error) {
      console.error("Resend OTP Error:", error);
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#971201] mb-2 md:mb-4 rounded-b-3xl">
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps />
            </div>
          </div>

          <div className="flex justify-center mt-2 md:mt-4">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          <div className="flex flex-1 items-center justify-center relative flex-col">
            <div
              className="relative bg-[#e9b6b6] rounded-2xl shadow-xl px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 w-full max-w-[280px] sm:max-w-[320px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
              style={{ minHeight: "240px" }}
            >
              <div className="absolute -top-13 -left-4 md:-top-12 md:-left-20 z-40">
                <img 
                  src="/Babaotp.png" 
                  alt="Baba" 
                  className="w-[75px] h-[75px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] object-contain drop-shadow-2xl" 
                />
              </div>

              <div className="text-center mb-2 sm:mb-3 md:mb-4">
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#222] mb-1">
                  Tap the Code, Unlock the Magic!
                </h2>
                <p className="text-[8px] sm:text-[10px] text-gray-600">OTP sent to your phone number</p>
              </div>

              <form className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={otp}
                    onChange={handleChange}
                    placeholder="Enter OTP"
                    maxLength={6}
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium text-center"
                    autoFocus
                  />
                  {error && (
                    <p className="text-red-500 text-[8px] sm:text-xs mt-1">{error}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading || !otp || !userLocation.lat || !userLocation.lng}
                  className="mt-1 w-[120px] sm:w-[140px] md:w-[160px] mx-auto flex items-center justify-center gap-2 bg-[#971201] text-white font-bold py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-lg shadow hover:bg-[#b13a2f] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Verifying..." : "SUBMIT"}
                  <span className="bg-white text-[#971201] rounded-full p-0.5 sm:p-1 ml-1">
                    <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4l8 6-8 6V4z" />
                    </svg>
                  </span>
                </button>
                
                <div className="text-center">
                  <p className="text-[8px] sm:text-[10px] text-[#b48b8b] mt-1">
                    No stress! Tap{" "}
                    <button 
                      type="button"
                      onClick={handleResendOTP}
                      disabled={isLoading || resendCooldown > 0 || !userLocation.lat || !userLocation.lng}
                      className={`text-[#971201] font-semibold ${(isLoading || resendCooldown > 0 || !userLocation.lat || !userLocation.lng) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      "Resend OTP"
                    </button>
                    {resendCooldown > 0 && ` (${resendCooldown}s)`}
                    {" "}and Baba will send it again
                  </p>
                </div>
              </form>
            </div>

            <div className="md:hidden w-full mt-2">
              <div className="flex justify-center">
                <StepsList />
              </div>
            </div>

            <div className="hidden md:block">
              <div className="w-auto">
                <StepsList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-4 md:py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between rounded-t-3xl">
        <div className="text-xs opacity-70">
          Terms & Condition &nbsp; | &nbsp; Privacy Policy
        </div>
        <div className="font-bold text-sm md:text-base mt-2 md:mt-0">Contacts</div>
      </footer>
    </div>
  );
}

