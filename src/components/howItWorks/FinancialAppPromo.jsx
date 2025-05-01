import React from "react";
import PhoneIcon from "./../../assets/howitworks/icon-1.png";
import Navbar from "./../../components/Navbar";
import Logo from "./../../assets/Logo.png";
export default function FinancialAppPromo() {
  return (
    <>
      <div className="flex justify-between items-center gap-4 mr-10 pt-5 pl-5">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <Navbar />
      </div>
      <div className="bg-white p-1  w-full pt-20">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-lg xs:text-xl sm:text-5xl font-extrabold tracking-wider text-teal-800">
            YOUR SHORTCUT
            <br />
            TO PAISA PEACE.
          </h1>
        </div>
        <div className="flex justify-end">
          <div className="bg-rose-100/70 rounded-2xl p-3 xs:p-6 sm:p-14 w-[80%] relative overflow-visible flex flex-row items-center min-h-[100px] xs:min-h-[140px] sm:min-h-[250px]">
            {/* Phone Icon */}
            <div className="absolute -bottom-8 xs:-bottom-12 sm:-bottom-20 -left-6 xs:-left-10 sm:-left-30 z-10">
              <img
                src={PhoneIcon}
                alt="Phone Icon"
                className="w-24 h-28 xs:w-40 xs:h-48 sm:w-75 sm:h-80 object-contain"
              />
            </div>
            <div className="pl-10 xs:pl-20 sm:pl-24 flex-1">
              <h2 className="text-sm xs:text-lg sm:text-3xl font-extrabold text-gray-900 mb-1 xs:mb-2 sm:mb-4">
                DOWNLOAD THE APP
              </h2>
              <p className="text-xs xs:text-sm sm:text-xl font-medium mb-1 xs:mb-2 sm:mb-6 text-gray-800">
                From chai-money to chaos-money — Baba's your paisa pal.
              </p>
              <p className="text-xs xs:text-base sm:text-2xl font-bold text-gray-900">
                Tap. Install. Chill. Your cash shortcut just landed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
