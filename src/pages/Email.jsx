import React, { useState } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps from "../components/home/Navbarsteps";
import { motion } from "framer-motion";

export default function Email() {
  const [formData, setFormData] = useState({
    personalEmail: "",
    workEmail: ""
  });
  const [errors, setErrors] = useState({
    personalEmail: "",
    workEmail: ""
  });

  // Validate email
  const validateEmail = (email, field) => {
    if (!email) return `${field} is required`;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return `Please enter a valid ${field.toLowerCase()}`;
    return "";
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const personalEmailError = validateEmail(formData.personalEmail, "Personal Email");
    const workEmailError = validateEmail(formData.workEmail, "Work Email");
    
    setErrors({
      personalEmail: personalEmailError,
      workEmail: workEmailError
    });

    if (!personalEmailError && !workEmailError) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // Add your submission logic here
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#971201] mb-2 md:mb-4 rounded-b-3xl">
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
                  Where Baba sends blessings (and OTPs).
                </h2>
              </div>

              <form className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="personalEmail"
                    value={formData.personalEmail}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium text-center"
                  />
                  {errors.personalEmail && (
                    <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.personalEmail}</p>
                  )}
                </div>

                <div className="text-center mt-1 sm:mt-2">
                  <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#222] mb-1">
                    Where your boss might say yes to your loan.
                  </h2>
                </div>

                <div>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="@companydomain.com/.in"
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#971201] bg-[#e9b6b6] text-gray-800 placeholder:text-[#b48b8b] text-xs sm:text-base font-medium text-center"
                  />
                  {errors.workEmail && (
                    <p className="text-red-500 text-[8px] sm:text-xs mt-1">{errors.workEmail}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="mt-1 w-[120px] sm:w-[140px] md:w-[160px] mx-auto flex items-center justify-center gap-2 bg-[#971201] text-white font-bold py-1.5 sm:py-2 rounded-full text-sm sm:text-base md:text-lg shadow hover:bg-[#b13a2f] transition"
                >
                  SUBMIT
                  <span className="bg-white text-[#971201] rounded-full p-0.5 sm:p-1 ml-1">
                    <svg width="14" height="14" className="sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 20 20">
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
      <footer className="bg-black text-white py-4 md:py-8 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between rounded-t-3xl">
        <div className="text-xs opacity-70">
          Terms & Condition &nbsp; | &nbsp; Privacy Policy
        </div>
        <div className="font-bold text-sm md:text-base mt-2 md:mt-0">Contacts</div>
      </footer>
    </div>
  );
}