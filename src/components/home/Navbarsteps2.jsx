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

      {/* Mobile Menu - With sliding animations */}
      <div 
        className={`md:hidden fixed top-0 right-0 w-full h-full bg-white z-50 transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-[#243112] transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Items with staggered animations */}
        <div className="flex flex-col space-y-6 w-full px-6 pt-20">
          {[
            { text: "Home", delay: 0 },
            { text: "About Us", delay: 100 },
            { text: "Repay", delay: 200 },
            { text: "Contact Us", delay: 300 }
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-[#243112] font-semibold text-lg transform transition-all duration-500 ease-out ${
                isMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-full opacity-0'
              }`}
              style={{
                transitionDelay: `${item.delay}ms`
              }}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Pill-shaped nav */}
        <div className="flex items-center bg-[#ffffff99] rounded-full px-6 py-2 space-x-6">
          <a href="#" className="text-green font-semibold text-base">Home</a>
          <a href="#" className="text-green font-semibold text-base">About Us</a>
          <a href="#" className="text-green font-semibold text-base">Repay</a>
          <a href="#" className="text-green font-semibold text-base">Contact Us</a>
        </div>
      </div>

      {/* Loan Links - Always visible on all screens */}
      <div className="flex items-center space-x-2 md:space-x-4">
        <a href="#" className="text-white font-bold text-xs md:text-sm">Salaried Loan</a>
        <a href="#" className="text-white font-bold text-xs md:text-sm">Business Loan</a>
      </div>
    </nav>
  );
}
