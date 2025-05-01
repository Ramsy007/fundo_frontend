import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbarsteps() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-1 sm:gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Fundo Baba Logo"
            className="w-12 h-6 sm:w-14 sm:h-7 md:w-16 md:h-8 lg:w-20 lg:h-10 xl:w-24 xl:h-12"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-2 md:space-x-2 lg:space-x-3 xl:space-x-4 text-[11px] md:text-xs lg:text-xs xl:text-sm font-semibold">
          <li className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-200 hover:text-white transition-colors duration-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-200 hover:text-white transition-colors duration-200"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <a
              href="#"
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              Repay
            </a>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-200 hover:text-white transition-colors duration-200"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-3">
          <button
            onClick={() => navigate("/apply/pan-mobile")}
            className="bg-white text-[#04344a] px-2 md:px-2 lg:px-2.5 xl:px-3 py-0.5 md:py-0.5 lg:py-1 rounded-full text-[10px] md:text-[10px] lg:text-[11px] xl:text-sm font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors duration-200"
          >
            Salaried Loan
          </button>
          <button className="bg-white text-[#04344a] px-2 md:px-2 lg:px-2.5 xl:px-3 py-0.5 md:py-0.5 lg:py-1 rounded-full text-[10px] md:text-[10px] lg:text-[11px] xl:text-sm font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors duration-200">
            Business Loan
          </button>
        </div>

        {/* Center Buttons for Mobile */}
        <div className="flex md:hidden space-x-1">
          <button
            onClick={() => navigate("/apply/pan-mobile")}
            className="bg-white text-[#04344a] px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors duration-200"
          >
            Salaried Loan
          </button>
          <button className="bg-white text-[#04344a] px-1.5 py-0.5 rounded-full text-[8px] sm:text-[10px] font-semibold whitespace-nowrap hover:bg-gray-100 transition-colors duration-200">
            Business Loan
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1 hover:text-gray-200 transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
          {menuOpen && (
            <ul className="absolute right-0 w-32 sm:w-36 bg-[#04344a] shadow-lg rounded-lg overflow-hidden text-white z-50 mt-2">
              <li className="hover:bg-[#032736] px-3 py-1.5 cursor-pointer text-xs sm:text-sm border-b border-gray-700">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-200 hover:text-white transition-colors duration-200"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="hover:bg-[#032736] px-3 py-1.5 cursor-pointer text-xs sm:text-sm border-b border-gray-700">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-200 hover:text-white transition-colors duration-200"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="hover:bg-[#032736] px-3 py-1.5 cursor-pointer text-xs sm:text-sm border-b border-gray-700">
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  Repay
                </a>
              </li>
              <li className="hover:bg-[#032736] px-3 py-1.5 cursor-pointer text-xs sm:text-sm">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-bold"
                      : "text-gray-200 hover:text-white transition-colors duration-200"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
