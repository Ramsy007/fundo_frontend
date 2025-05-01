import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI } from "../services/api";
// import { useDispatch } from "react-redux";
// import { changeTracker } from "../redux/slices/lTracherSlice";
// import { LEAD_STAGE, leadStageToRouteMap } from "../utils/constants";
// import useLeadStage from "../hooks/useLeadStage";
// import PageLoader from "../components/Loader";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";

// const curr_page_lead_stage = [
//   LEAD_STAGE.LOAN_REQUESTED,
//   LEAD_STAGE.SEND_AADHAAR_OTP,
// ];

export default function Aadhar() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { leadStage, isLoadingStage, errorStage } = useLeadStage();
  const [aadharNumber, setAadharNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   dispatch(changeTracker({ step: 3 }));
  // }, [dispatch]);

  const validateAdhar = (adhar) => {
    const adharRegex = /^\d{12}$/;
    return adharRegex.test(adhar);
  };

  const handleAadharChange = (e) => {
    const value = e.target.value.replace(/\s/g, ""); // Remove spaces
    if (/^\d{0,12}$/.test(value)) {
      // Format the number as 4-4-4
      let formattedValue = value;
      if (value.length > 4) {
        formattedValue = value.slice(0, 4) + " " + value.slice(4);
      }
      if (value.length > 8) {
        formattedValue = formattedValue.slice(0, 9) + " " + formattedValue.slice(9);
      }
      setAadharNumber(formattedValue);
      setErrors((prev) => ({ ...prev, adhar: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const adharNumberClean = aadharNumber.replace(/\s/g, "");

    if (!validateAdhar(adharNumberClean)) {
      newErrors.adhar = "Please enter a valid 12-digit Aadhar number";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        setIsLoading(true);
        const data = {
          aadhaarNo: adharNumberClean,
        };

        console.log("Initiating KYC with data:", data);
        const response = await userAPI.initiateKYC(data);
        console.log("KYC Initiation Response:", response);

        if (response) {
          // Save data to sessionStorage
          const stateData = {
            aadhaarNo: adharNumberClean,
            accessKey: response.accessKey,
          };
          sessionStorage.setItem("adharData", JSON.stringify(stateData));

          navigate("/apply/otp-aadhar", {
            state: stateData
          });
        }
      } catch (error) {
        console.error("KYC Initiation Error:", error);
        setErrors((prev) => ({
          ...prev,
          submit: error.response?.data?.message || "Failed to process. Please try again.",
        }));
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  // if (!leadStage) {
  //   return <PageLoader />;
  // }

  // if (leadStage && !curr_page_lead_stage.includes(leadStage)) {
  //   navigate(leadStageToRouteMap[leadStage]);
  // }

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
                    value={aadharNumber}
                    onChange={handleAadharChange}
                    className={`w-full px-4 py-2 sm:py-3 text-center rounded-lg border-2 ${
                      errors.adhar ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-[#243112] bg-transparent text-black text-lg sm:text-xl font-medium tracking-wider`}
                    maxLength={14}
                  />
                  {errors.adhar && (
                    <p className="text-red-500 text-xs mt-1">{errors.adhar}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={aadharNumber.length !== 12 || isLoading}
                  className="w-full bg-[#243112] text-white font-semibold py-2 sm:py-3 rounded-full text-sm sm:text-base flex items-center justify-center gap-2 shadow hover:bg-[#2f4117] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "PROCESSING..." : "SUBMIT"}
                  <span className="bg-white rounded-full p-1">
                    <svg className="w-4 h-4 text-[#243112]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3a1 1 0 00-1 1v10.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L11 14.586V4a1 1 0 00-1-1z" />
                    </svg>
                  </span>
                </button>
                {errors.submit && (
                  <p className="text-red-500 text-xs mt-2 text-center">{errors.submit}</p>
                )}
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