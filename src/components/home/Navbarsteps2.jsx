import React, { useState } from "react";

export default function Navbarsteps() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#a11b0a] p-4 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white font-semibold text-base">Home</a>
            <a href="#" className="text-white font-semibold text-base">About Us</a>
            <a href="#" className="text-white font-semibold text-base">Repay</a>
            <a href="#" className="text-white font-semibold text-base">Contact Us</a>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Pill-shaped nav */}
        <div className="flex items-center bg-[#ffffff99] rounded-full px-6 py-2 space-x-6">
          <a href="#" className="text-green font-semibold text-base">Home</a>
          <a href="#" className="text-green font-semibold text-base">About Us</a>
          <a href="#" className="text-green font-semibold text-base">Repay</a>
          <a href="#" className="text-green font-semibold text-base">Contact Us</a>
        </div>
      </div>

      {/* Loan Links - Always visible */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <a href="#" className="text-white font-bold text-xs md:text-sm">Salaried Loan</a>
        <a href="#" className="text-white font-bold text-xs md:text-sm">Business Loan</a>
      </div>
    </nav>
  );
}
