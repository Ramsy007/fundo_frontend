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
          <div className="flex flex-1 items-center justify-center relative flex-col">
            {/* Form Box */}
            <div className="relative bg-white/62 backdrop-blur-sm rounded-3xl shadow-xl px-6 py-5 w-full max-w-[400px] sm:max-w-[500px] flex flex-col items-center text-[#222]">
              
              {/* Title */}
              <div className="text-center mb-6">
                <h2 className="text-lg font-medium mb-0.5">
                  Baba's scroll of truth is ready for your <span className="text-[#243112]">E-Sign!</span>
                </h2>
                <p className="text-sm text-[#444]">
                  Please review and sign the loan agreement below
                </p>
              </div>

              {/* Loan Details */}
              <div className="w-full mb-5">
                <h3 className="text-black text-base font-medium mb-3">Loan Details</h3>
                <div className="grid grid-cols-4 gap-y-3">
                  <div className="col-span-1">
                    <span className="text-black text-sm text-[#444]">Loan Amount</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-sm font-medium">₹5,001</span>
                  </div>
                  <div className="col-span-1 pl-4">
                    <span className="text-black text-sm text-[#444]">Interest Rate</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-sm font-medium">0.9% /day</span>
                  </div>

                  <div className="col-span-1">
                    <span className="text-black text-sm ">Tenure</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-sm font-medium">19 days</span>
                  </div>
                  <div className="col-span-1 pl-4">
                    <span className="text-black text-sm whitespace-nowrap">Processing Fee</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-sm font-medium">₹750</span>
                  </div>

                  <div className="col-span-1">
                    <span className="text-black text-sm whitespace-nowrap ">Repayment Amount</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-sm font-medium">₹5,856</span>
                  </div>
                  <div className="col-span-1 pl-4">
                    <span className="text-black text-sm whitespace-nowrap ">Disbursal Date</span>
                  </div>
                  <div className="text-right col-span-1">
                    <span className="text-black text-sm font-medium">11-04-2025</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="bg-[#24311252] bg-opacity-30 py-1.5 px-2 rounded-xl w-full mb-4">
                <h3 className="text-xs font-medium mb-0.5 text">Important Notes</h3>
                <div className="text-[11px] text-black leading-none">
                  <p className="mb-0.5">• The loan amount will be disbursed to your bank account ending with 9421</p>
                  <p>• Late payment charges will be applicable for delayed payments</p>
                </div>
              </div>

              {/* Preview Sanction Letter */}
              <button className="w-full bg-[#243112] text-white py-4 rounded-xl flex items-center justify-between px-5">
                <div>
                  <p className="text-base font-medium">Preview Sanction Letter</p>
                  <p className="text-xs text-gray-200">Click to view your sanction letter</p>
                </div>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V8l-6-6H6zm4 1.5L14.5 8H10V3.5z" />
                </svg>
              </button>

              {/* Baba Image */}
              <div className="absolute -top-16 -left-12 z-40">
                <img 
                  src="/Babastep.png" 
                  alt="Baba" 
                  className="w-[120px] h-[120px] object-contain drop-shadow-2xl" 
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
