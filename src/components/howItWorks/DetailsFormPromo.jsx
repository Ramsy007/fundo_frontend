import React from "react";
import FormIcon from "./../../assets/howitworks/icon-2.png";

export default function DetailsFormPromo() {
  return (
    <div className="bg-white p-1 sm:p-8 mt-20 sm:mt-40 w-full">
      <div>
        <div className="bg-rose-100/70 rounded-xl sm:rounded-3xl p-3 xs:p-6 sm:p-12 w-[90%] relative overflow-visible">
          {/* Form Icon */}
          <div className="absolute -top-10 xs:-top-14 sm:-top-19 -right-8 xs:-right-14 sm:-right-20 z-10">
            <img
              src={FormIcon}
              alt="Form Checklist Icon"
              className="w-24 h-28 xs:w-40 xs:h-48 sm:w-80 sm:h-80 object-contain"
            />
          </div>

          <div className="pl-1 xs:pl-10 sm:pl-10 md:pl-32">
            <h2 className="text-base xs:text-2xl sm:text-4xl font-bold tracking-widest text-gray-900 mb-2 xs:mb-4 sm:mb-8 leading-tight">
              FILL A FEW DETAILS
            </h2>

            <div className="space-y-0.5 xs:space-y-3 sm:space-y-6">
              <p className="text-xs xs:text-base sm:text-2xl text-gray-800">
                Name, Aadhaar, income...
                <br />
                just enough for Baba to say:
              </p>

              <p className="text-xs xs:text-base sm:text-2xl font-bold text-gray-800">
                "Hello dost, paise chahiye? Mil jayega."
              </p>

              <div className="mt-2 xs:mt-4 sm:mt-8">
                <p className="text-xs xs:text-base sm:text-2xl text-gray-800">
                  No photocopies. No queues.
                  <br />
                  No awkward calls. {" "}
                  <span className="font-bold">Baba's cool like that.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
