import React from "react";
import WalletIcon from "./../../assets/howitworks/icon-3.png";

export default function MoneyTransferPromo() {
  return (
    <div className="bg-white p-1 sm:p-8 mt-20 sm:mt-40 w-full">
      <div className="flex justify-end">
        <div className="bg-rose-100/70 rounded-xl sm:rounded-3xl p-3 xs:p-6 sm:p-12 w-[90%] relative overflow-visible flex flex-row items-center min-h-[100px] xs:min-h-[140px] sm:min-h-[250px]">
          {/* Wallet Icon */}
          <div className="absolute -top-10 xs:-top-14 sm:-top-19 -left-8 xs:-left-16 sm:-left-34 z-10">
            <img
              src={WalletIcon}
              alt="Wallet with Clock Icon"
              className="w-24 h-28 xs:w-40 xs:h-48 sm:w-80 sm:h-80 object-contain"
            />
          </div>

          <div className="pl-12 xs:pl-20 sm:pl-32">
            <h2 className="text-base xs:text-2xl sm:text-4xl font-bold tracking-widest text-gray-900 mb-2 xs:mb-4 sm:mb-8 leading-tight">
              GET MONEY
              <br />
              IN MINUTES
            </h2>

            <div className="space-y-0.5 xs:space-y-3 sm:space-y-6">
              <p className="text-xs xs:text-base sm:text-2xl text-gray-800">
                Faster than your crush leaves you
                <br />
                on "seen."
              </p>

              <p className="text-xs xs:text-base sm:text-2xl text-gray-800">
                Baba transfers money while your tea
                <br />
                is still hot.
              </p>

              <p className="text-xs xs:text-base sm:text-2xl text-gray-800">
                Before you can say{" "}
                <span className="font-bold">"arre waah!"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
