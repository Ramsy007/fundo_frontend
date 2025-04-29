import React from "react";
import BabaIcon from "./../../assets/howitworks/baba.png";
import LogoIcon from "./../../assets/howitworks/logo.png";

export default function LoanDetailsPromo() {
  return (
    <div className="bg-white p-2 sm:p-8 mt-11 sm:mt-5 w-full">
      <div className="relative">
        <div className="bg-teal-800 rounded-xl sm:rounded-3xl p-4 xs:p-8 sm:p-16 w-full mx-auto relative">
          <div className="grid grid-cols-2 gap-x-4 xs:gap-x-16 sm:gap-x-32 gap-y-4 xs:gap-y-8 sm:gap-y-16 mb-6 xs:mb-10 sm:mb-20">
            <div>
              <h3 className="text-base xs:text-xl sm:text-3xl font-bold text-white/90 mb-1 xs:mb-2 sm:mb-4">
                LOAN AMOUNT:
              </h3>
              <p className="text-lg xs:text-2xl sm:text-4xl text-white">₹5,000 to ₹1,00,000</p>
            </div>
            <div>
              <h3 className="text-base xs:text-xl sm:text-3xl font-bold text-white/90 mb-1 xs:mb-2 sm:mb-4">
                INTEREST RATE:
              </h3>
              <p className="text-lg xs:text-2xl sm:text-4xl text-white">Starts at just 1% per day</p>
            </div>
            <div>
              <h3 className="text-base xs:text-xl sm:text-3xl font-bold text-white/90 mb-1 xs:mb-2 sm:mb-4">
                TENURE:
              </h3>
              <p className="text-lg xs:text-2xl sm:text-4xl text-white">7 to 40 days</p>
            </div>
            <div>
              <h3 className="text-base xs:text-xl sm:text-3xl font-bold text-white/90 mb-1 xs:mb-2 sm:mb-4">
                HIDDEN CHARGES:
              </h3>
              <p className="text-lg xs:text-2xl sm:text-4xl text-white">
                Zero. Zilch. Not Baba's style.
              </p>
            </div>
          </div>

          <div className="text-center mb-8 xs:mb-12 sm:mb-20">
            <h2 className="text-xl xs:text-3xl sm:text-5xl font-bold text-white tracking-[0.2em] leading-relaxed">
              HOW MUCH? HOW LONG?
              <br />
              WHAT'S THE CATCH?
            </h2>
          </div>

          {/* Baba Icon positioned at bottom of teal card */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 xs:-bottom-16 sm:-bottom-24">
            <div className="w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48">
              <img
                src={BabaIcon}
                alt="Baba Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content below the card */}
        <div className="flex flex-col items-center mt-16 xs:mt-24 sm:mt-32">
          <h2 className="text-xl xs:text-3xl sm:text-5xl font-bold text-teal-800 tracking-wider mb-6 xs:mb-10 sm:mb-16">
            (SPOILER: NO CATCH)
          </h2>
          <div className="w-24 xs:w-32 sm:w-48">
            <img
              src={LogoIcon}
              alt="Fundo Baba Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
