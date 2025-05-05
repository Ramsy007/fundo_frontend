import React from "react";
import BabaIcon from "./../../assets/howitworks/icon-4.png";

export default function EligibilityPromo() {
  return (
    <div className="bg-white p-2 sm:p-8 mt-20 sm:mt-40 w-full">
      <div className="flex justify-end">
        <div className="bg-rose-100/70 rounded-xl sm:rounded-3xl p-1 xs:p-8 sm:p-16 w-[90%] relative overflow-visible">
          {/* Baba Icon */}
          <div className="absolute -bottom-20 xs:-bottom-28 sm:-bottom-40 -left-17 xs:-left-40 sm:-left-70 z-10">
            <img
              src={BabaIcon}
              alt="Baba on Bike Icon"
              className="w-37 h-37 xs:w-80 xs:h-80 sm:w-140 sm:h-140 object-contain"
            />
          </div>

          <div className="pl-10 xs:pl-20 sm:pl-40">
            <h2 className="text-base xs:text-2xl sm:text-4xl font-bold tracking-widest text-gray-900 mb-1 leading-tight">
              WHO'S ELIGIBLE?
              <br />
              <span className="text-sm xs:text-xl sm:text-3xl">(SPOILER: PROBABLY YOU)</span>
            </h2>

            <div className="mt-4 xs:mt-8 sm:mt-12">
              <p className="text-xs xs:text-base sm:text-2xl text-gray-800 mb-1 xs:mb-2 sm:mb-3">
                You're good to go if you have:
              </p>

              <ul className="space-y-1 xs:space-y-2 sm:space-y-3 text-xs xs:text-base sm:text-2xl text-gray-800">
                <li className="flex items-center">
                • Age between <b style={{marginLeft: "10px"}}>21 and 58</b>
                </li>
                <li className="flex items-center">
                • At least{" "}
                <b style={{marginLeft: "10px"}}>₹40,000 monthly income</b>
                </li>
                <li className="flex items-center">
                  • Internet-enabled bank account
                </li>
                <li className="flex items-center">• Valid Aadhaar + PAN</li>
                <li className="flex items-center">
                  • And yes... you're in India
                </li>
              </ul>

              <p className="text-xs xs:text-base sm:text-2xl text-gray-800 mt-4 xs:mt-8 sm:mt-12">
                Baba's loyal to desi bros & behens only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
