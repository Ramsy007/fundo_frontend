import React from "react";
import logo from "../assets/logo.png";
import StepsList from "../components/StepsList";
import Navbarsteps2 from "../components/home/Navbarsteps2";
import FooterStep from "../components/FooterStep";

export default function Esign() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white pl-0 pr-0 md:pl-6 md:pr-6 rounded-b-lg relative">
      <div className="bg-[#243112] mb-2 md:mb-4 rounded-b-3xl">
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-100px)]">
          
          {/* Navbar */}
          <div className="flex justify-center pt-2 md:pt-4">
            <div className="w-full md:w-[700px]">
              <Navbarsteps2 />
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mt-2 md:mt-4">
            <img src={logo} alt="Fundo Baba Logo" className="w-24 md:w-32" />
          </div>

          {/* Main Section */}
          <div className="flex flex-1 items-center justify-center relative flex-col px-6 sm:px-8 md:px-0">
            {/* Form Box */}
            <div className="relative bg-white/62 backdrop-blur-sm rounded-3xl shadow-xl px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-5 w-full max-w-[400px] sm:max-w-[500px] flex flex-col items-center text-[#222] mx-4 sm:mx-6 md:mx-0">
              
              {/* Title */}
              <div className="text-center mb-4 sm:mb-5 md:mb-6">
                <h2 className="text-base sm:text-lg md:text-lg font-medium mb-0.5">
                  Baba's scroll of truth is ready for your <span className="text-[#243112]">E-Sign!</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-sm text-[#444]">
                  Please review and sign the loan agreement below
                </p>
              </div>

              {/* Loan Details */}
              <div className="w-full mb-3 sm:mb-4 md:mb-5">
                <h3 className="text-black text-sm sm:text-base md:text-base font-medium mb-2 sm:mb-3">Loan Details</h3>
                <div className="grid grid-cols-4 gap-x-1 sm:gap-x-2 gap-y-2 sm:gap-y-3">
                  <div className="col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm text-[#444]">Loan Amount</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">₹5,001</span>
                  </div>
                  <div className="col-span-1 pl-1 sm:pl-2 md:pl-4">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm text-[#444]">Interest Rate</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">0.9% /day</span>
                  </div>

                  <div className="col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm">Tenure</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">19 days</span>
                  </div>
                  <div className="col-span-1 pl-1 sm:pl-2 md:pl-4">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm whitespace-nowrap">Processing Fee</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">₹750</span>
                  </div>

                  <div className="col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm whitespace-nowrap">Repayment</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">₹5,856</span>
                  </div>
                  <div className="col-span-1 pl-1 sm:pl-2 md:pl-4">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm whitespace-nowrap">Disbursal</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-[9px] sm:text-xs md:text-sm font-medium">11-04-25</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-[#24311252] bg-opacity-30 py-1 sm:py-1.5 px-2 rounded-xl w-full mb-3 sm:mb-4">
                <h3 className="text-[10px] sm:text-xs font-medium mb-0.5">Important Notes</h3>
                <div className="text-[9px] sm:text-[11px] text-black leading-tight">
                  <p className="mb-0.5">• The loan amount will be disbursed to your bank account ending with 9421</p>
                  <p>• Late payment charges will be applicable for delayed payments</p>
                </div>
              </div>

              {/* Preview Sanction Letter */}
              <button className="group w-full bg-gradient-to-r from-[#243112] via-[#2c3d15] to-[#243112] text-white py-2 sm:py-3 md:py-4 rounded-xl flex items-center justify-between px-2 sm:px-3 md:px-5 relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(36,49,18,0.4)] hover:scale-[1.02]">
                {/* Constant animated background */}
                <div className="absolute inset-0">
                  {/* Constant rotating gradient - smaller radius for mobile */}
                  <div className="absolute inset-[2px] sm:inset-[3px] md:inset-0 bg-gradient-to-r from-[#243112]/0 via-[#4c6825]/10 to-[#243112]/0 animate-rotate-bg rounded-lg"></div>
                  
                  {/* Constant floating particles - adjusted spacing for mobile */}
                  <div className="absolute inset-[4px] sm:inset-[6px] md:inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white/20 rounded-full animate-float-particle"
                        style={{
                          left: `${i * 18}%`,
                          animationDelay: `${i * 0.5}s`,
                          top: '50%'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Hover effects - adjusted for mobile */}
                <div className="absolute inset-[2px] sm:inset-[3px] md:inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Scanning line on hover */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-1/2 h-[1px] sm:h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent absolute top-0 -left-full group-hover:animate-scan"></div>
                  </div>
                  
                  {/* Pulsing border on hover */}
                  <div className="absolute inset-0 rounded-lg border border-white/20 group-hover:animate-border-pulse"></div>
                </div>

                {/* Content container */}
                <div className="relative flex items-center space-x-2 sm:space-x-3">
                  {/* Animated status indicator - smaller for mobile */}
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#4c6825] animate-pulse-slow"></div>
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#4c6825] animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  {/* Text content */}
                  <div className="relative">
                    <p className="text-sm sm:text-base font-medium transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      Preview Sanction Letter
                      {/* Constant shimmer effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></span>
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-200/90 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      Click to view your sanction letter
                    </p>
                  </div>
                </div>

                {/* Icon container - adjusted for mobile */}
                <div className="relative">
                  {/* Constant rotating glow - smaller radius */}
                  <div className="absolute inset-[2px] sm:inset-[3px] md:inset-0 bg-gradient-to-r from-[#4c6825]/30 to-transparent rounded-full animate-spin-slow"></div>
                  
                  {/* Icon with constant float */}
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white relative animate-gentle-float group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V8l-6-6H6zm4 1.5L14.5 8H10V3.5z" />
                  </svg>
                </div>

                {/* Constant corner animations - smaller for mobile */}
                <div className="absolute inset-0">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 animate-corner-pulse"
                      style={{
                        top: i < 2 ? '2px' : 'auto',
                        bottom: i >= 2 ? '2px' : 'auto',
                        left: i % 2 === 0 ? '2px' : 'auto',
                        right: i % 2 === 1 ? '2px' : 'auto',
                        borderTop: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                        borderBottom: i >= 2 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                        borderLeft: i % 2 === 0 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                        borderRight: i % 2 === 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                        borderRadius: '2px'
                      }}
                    ></div>
                  ))}
                </div>
              </button>

              <style jsx>{`
                @keyframes rotate-bg {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }

                @keyframes float-particle {
                  0%, 100% { transform: translateY(-6px) scale(1); opacity: 0.3; }
                  50% { transform: translateY(6px) scale(1.2); opacity: 0.7; }
                }

                @keyframes pulse-slow {
                  0%, 100% { opacity: 0.4; transform: scale(0.8); }
                  50% { opacity: 0.8; transform: scale(1.2); }
                }

                @keyframes gentle-float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-2px); }
                }

                @keyframes shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }

                @keyframes corner-pulse {
                  0%, 100% { opacity: 0.3; }
                  50% { opacity: 0.7; }
                }

                @keyframes scan {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(300%); }
                }

                @keyframes border-pulse {
                  0%, 100% { border-color: rgba(255,255,255,0.1); }
                  50% { border-color: rgba(255,255,255,0.3); }
                }

                .animate-rotate-bg {
                  animation: rotate-bg 8s linear infinite;
                }

                .animate-float-particle {
                  animation: float-particle 3s ease-in-out infinite;
                }

                .animate-pulse-slow {
                  animation: pulse-slow 2s ease-in-out infinite;
                }

                .animate-gentle-float {
                  animation: gentle-float 2s ease-in-out infinite;
                }

                .animate-shimmer {
                  animation: shimmer 3s linear infinite;
                }

                .animate-corner-pulse {
                  animation: corner-pulse 2s ease-in-out infinite;
                }

                .animate-scan {
                  animation: scan 1.5s linear infinite;
                }

                .animate-border-pulse {
                  animation: border-pulse 2s ease-in-out infinite;
                }
              `}</style>

              {/* Baba Image */}
              <div className="absolute -top-20 -left-10 sm:-top-20 sm:-left-8 md:-top-20 md:-left-44 z-40">
                <img 
                  src="/Babaesign.png" 
                  alt="Baba" 
                  className="w-[130px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] object-contain drop-shadow-2xl" 
                />
              </div>
            </div>

            {/* Steps List */}
            <div className="mt-4">
              <StepsList />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterStep />
    </div>
  );
}
