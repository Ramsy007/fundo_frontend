import React from "react";
import PhoneIcon from "./../../assets/howitworks/icon-1.png";
import Navbar from "./../../components/Navbar";

export default function FinancialAppPromo() {
  return (
    <>
      <div className="mt-5 flex justify-end mr-10">
        <Navbar />
      </div>
      <div className="bg-white p-8 w-full">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-wider text-teal-800">
            YOUR SHORTCUT
            <br />
            TO PAISA PEACE.
          </h1>
        </div>

        <div className="flex justify-end">
          <div className="bg-rose-100/70 rounded-2xl p-14 w-[80%] relative overflow-visible">
            {/* Phone Icon */}
            <div className="absolute -bottom-20 -left-30 z-10">
              <img
                src={PhoneIcon}
                alt="Phone Icon"
                className="w-75 h-80 object-contain"
              />
            </div>

            <div className="pl-24">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                DOWNLOAD THE APP
              </h2>

              <p className="text-xl font-medium mb-6 text-gray-800">
                From chai-money to chaos-money — Baba's your paisa pal.
              </p>

              <p className="text-2xl font-bold text-gray-900">
                Tap. Install. Chill. Your cash shortcut just landed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
