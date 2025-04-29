import React, { useState } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import FooterStep from "../components/FooterStep";

export default function Step1() {
  const [showTerms, setShowTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    pan: "",
    phone: ""
  });
  const [errors, setErrors] = useState({
    pan: "",
    phone: ""
  });

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!pan) return "PAN is required";
    if (!panRegex.test(pan)) return "Please enter a valid PAN number";
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Please enter a valid 10-digit phone number";
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.toUpperCase()
    }));
    
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const panError = validatePAN(formData.pan);
    const phoneError = validatePhone(formData.phone);
    
    setErrors({
      pan: panError,
      phone: phoneError
    });

    if (!panError && !phoneError && agreed) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // Add your submission logic here
    }
  };

  const handleCheckboxClick = (e) => {
    e.preventDefault();
    if (!agreed) {
      setShowTerms(true);
    } else {
      setAgreed(false);
    }
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
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#971201] mb-2 md:mb-4 rounded-b-3xl">
        {/* Blur Background when Terms open */}
        {showTerms && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-20" />
        )}

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
              className="relative bg-[#e9b6b6] rounded-2xl shadow-xl px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8 w-full max-w-[280px] sm:max-w-[320px] md:max-w-lg flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
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
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#222] mb-1">
                  Step into Baba's zone. Quick PAN. Faster Loan.
                </h2>
                <p className="text-[8px] sm:text-[10px] text-gray-600">Please enter your details below</p>
              </div>

              <form className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleInputChange}
                    placeholder="Enter PAN (e.g., ABCDE1234F)"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium"
                  />
                  {errors.pan && (
                    <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.pan}</p>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Mobile No. (Aadhaar Registered)"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="flex items-center text-[10px] sm:text-sm mt-1">
                  <button
                    type="button"
                    className={`w-3 h-3 sm:w-4 sm:h-4 border ${agreed ? 'border-[#971201]' : 'border-gray-400'} rounded mr-2 flex items-center justify-center bg-white focus:outline-none transition-all duration-200`}
                    onClick={handleCheckboxClick}
                    aria-checked={agreed}
                  >
                    {agreed && (
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 text-[#971201]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="4" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    )}
                  </button>
                  <label
                    htmlFor="terms"
                    className="text-[#b48b8b] cursor-pointer font-medium"
                    onClick={handleCheckboxClick}
                  >
                    I agree to the <span className="text-[#971201] font-semibold">terms and conditions</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-1 w-[120px] sm:w-[140px] md:w-[160px] mx-auto flex items-center justify-center gap-2 bg-[#971201] text-white font-bold py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-lg shadow hover:bg-[#b13a2f] transition"
                >
                  SUBMIT
                  <span className="bg-white text-[#971201] rounded-full p-0.5 sm:p-1 ml-1">
                    <svg width="14" height="14" sm:width="18" sm:height="18" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4l8 6-8 6V4z" />
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

      {/* Terms Modal */}
      {showTerms && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-[280px] sm:max-w-[320px] md:max-w-md w-full mx-2 sm:mx-4 shadow-2xl text-center">
            <h2 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 md:mb-4 text-[#222]">Terms and Conditions</h2>
            <p className="text-[8px] sm:text-[10px] md:text-[12px] text-gray-700 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              I have read and agreed to the Terms of Use and hereby appoint Fintech Cloud Loan
              and its Lending NBFC to receive my credit information from credit bureaus, KYC from
              Government Regulated Database. By submitting my details, I override my NDNC registration
              to authorize Fintech Cloud Loan and its Lending NBFC/representatives to contact me
              through Call, SMS, Email, Whatsapp or any other mode. You may collect my address from
              various data sources for user verification and security purposes. I also authorize you
              to send me promotional offers of financial products or services from time to time.
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
              <button
                className="text-[10px] sm:text-xs md:text-sm text-[#222] font-semibold"
                onClick={handleDecline}
              >
                Decline
              </button>
              <button
                className="bg-[#971201] text-white text-[10px] sm:text-xs md:text-sm font-bold px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded"
                onClick={handleAgree}
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
