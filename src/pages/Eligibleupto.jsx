import React, { useState } from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";

export default function Eligibleupto() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      if (value === '' || (parseInt(value) >= 5000 && parseInt(value) <= 55000)) {
        setCustomAmount(value);
        setSelectedAmount('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = customAmount || selectedAmount;
    if (finalAmount) {
      // Handle submission with the selected/custom amount
      console.log("Proceeding with amount:", finalAmount);
    }
  };

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
          <div className="flex flex-1 items-center justify-center relative flex-col">
            {/* Form Card - Outer Container */}
            <div
              className="relative bg-gradient-to-b from-[#D9D9D9] to-[#CCCCCC] rounded-4xl shadow-xl px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-6 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[400px] flex flex-col items-center mx-2 sm:mx-4 md:mx-0"
              style={{ minHeight: "200px" }}
            >
              {/* BabaStep Image */}
              <div
                className="absolute -top-10 -left-3 md:-top-10 md:-left-16 z-40"
              >
                <img 
                  src="/Babastep.png" 
                  alt="Baba" 
                  className="w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] object-contain drop-shadow-2xl" 
                />
              </div>

              <div className="text-center mb-3 sm:mb-4">
                <h2 className="text-sm sm:text-base md:text-xl font-bold text-[#222] mb-1">
                  You are eligible for up to
                </h2>
                <p className="text-lg sm:text-xl md:text-3xl font-bold text-[#243112]">₹55,000</p>
              </div>

              {/* Inner darker section */}
              <form onSubmit={handleSubmit} className="w-full bg-gradient-to-b from-[#A3A3A3] to-[#B8B8B8] rounded-4xl p-3">
                <h3 className="text-xs sm:text-sm font-semibold text-[#222] mb-2">
                  Select Your Loan Amount
                </h3>
                
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-3">
                  {['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`${
                        selectedAmount === amount 
                          ? 'bg-white border-2 border-[#243112]' 
                          : 'bg-[#C5E5C5] hover:bg-[#b3d6b3]'
                      } text-[#222] rounded-full py-1 sm:py-1.5 text-[10px] sm:text-xs md:text-sm font-medium transition-colors`}
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    min="5000"
                    max="55000"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter custom amount"
                    className="w-full px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#243112] bg-white text-gray-800 text-xs sm:text-sm"
                  />
                  <p className={`text-[8px] sm:text-[10px] ${customAmount && (parseInt(customAmount) < 5000 || parseInt(customAmount) > 55000) ? 'text-red-500' : 'text-gray-600'} mt-0.5`}>
                    Enter amount between ₹5,000 - ₹55,000
                  </p>
                  <div className="flex justify-between text-[8px] sm:text-[10px] text-gray-600 mt-0.5">
                    <span>₹5,000</span>
                    <span>₹55,000</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedAmount && !customAmount}
                  className="w-full bg-[#243112] text-white font-bold py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow hover:bg-[#2f4117] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  PROCEED
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
    </div>
  );
}