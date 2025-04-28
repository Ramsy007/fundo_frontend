import React from "react";

export default function Navbarsteps() {
  return (
    <nav className="flex items-center space-x-8">
      {/* Pill-shaped nav */}
      <div className="flex items-center bg-[#d6a9a2] rounded-full px-6 py-2 space-x-6">
        <a href="#" className="text-[#7a2a1b] font-semibold text-base">Home</a>
        <a href="#" className="text-[#7a2a1b] font-semibold text-base">About Us</a>
        <a href="#" className="text-[#7a2a1b] font-semibold text-base">Repay</a>
        <a href="#" className="text-[#7a2a1b] font-semibold text-base">Contact Us</a>
      </div>
      {/* Right-side bold links */}
      <a href="#" className="text-white font-bold text-sm ml-4">Salaried Loan</a>
      <a href="#" className="text-white font-bold text-sm ml-4">Business Loan</a>
    </nav>
  );
}
